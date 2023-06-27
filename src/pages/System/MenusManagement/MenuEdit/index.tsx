import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormSelect,
  ProCard,
  ProFormDependency,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { history } from '@umijs/max';
import {
  MenusControllerGetMenuByType,
  MenusControllerGetMenuDetail,
  MenusControllerCreateMenu,
  MenusControllerUpdateMenu,
} from '@/services/system-interface/caidanjiekou';

export default () => {
  const { id }: any = history?.location?.state || { id: null };
  const requestInterface = id ? MenusControllerUpdateMenu : MenusControllerCreateMenu;
  return (
    <PageContainer
      header={{
        breadcrumb: {
          items: [
            {
              path: '/system',
              title: '系统管理',
            },
            {
              path: '/usersManagement',
              title: '用户管理',
            },
            {
              path: '/userEdit',
              title: id ? '用户编辑' : '新增用户',
            },
          ],
        },
      }}
    >
      <ProCard className="proCardNoPaddingTop">
        <ProForm
          request={async () => {
            if (id) return (await MenusControllerGetMenuDetail({ id })).data;
            return {};
          }}
          onFinish={async (values: any) => {
            const req = id ? { id, ...values } : { ...values };
            const res = await requestInterface(req);
            if (res?.message === '成功') {
              message.success(id ? '修改成功' : '新增成功');
              setTimeout(() => {
                history.go(-1);
              }, 700);
            }
          }}
        >
          <ProFormText width="md" name="menuName" label="菜单名称" disabled={!!id} />
          <ProFormText width="md" name="menuCode" label="菜单编号" />
          <ProFormSelect
            width="md"
            name="type"
            label="菜单类型"
            options={[
              { label: '目录', value: 1 },
              { label: '菜单', value: 2 },
            ]}
          />
          <ProFormDependency name={['type']}>
            {({ type }) => {
              return type === 2 ? (
                <ProFormSelect
                  width="md"
                  name="menuParentCode"
                  label="父级菜单"
                  request={async () => {
                    return (await MenusControllerGetMenuByType({ type: 1 }))?.data || [];
                  }}
                  fieldProps={{
                    fieldNames: {
                      label: 'menuName',
                      value: 'menuCode',
                    },
                  }}
                />
              ) : undefined;
            }}
          </ProFormDependency>
          <ProFormSelect
            width="md"
            name="status"
            label="状态"
            options={[
              {
                value: 1,
                label: '启用',
              },
              {
                value: 2,
                label: '禁用',
              },
            ]}
          />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
