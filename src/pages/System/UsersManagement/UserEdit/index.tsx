import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormSelect,
  ProCard,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { history } from '@umijs/max';
import {
  UsersControllerUserDetail,
  UsersControllerUserEdit,
  UsersControllerCreateUser,
} from '@/services/system-interface/yonghujiekou';

export default () => {
  const { id }: any = history?.location?.state || { id: null };
  const requestInterface = id ? UsersControllerUserEdit : UsersControllerCreateUser;
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
            if (id) return (await UsersControllerUserDetail({ id })).data;
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
            } else {
              message.warning(res.message);
            }
          }}
        >
          <ProFormText width="md" name="userName" label="姓名" disabled={!!id} />
          <ProFormText width="md" name="phone" label="手机号" />
          <ProFormSelect
            width="md"
            name="gender"
            label="性别"
            options={[
              {
                value: 0,
                label: '未知',
              },
              {
                value: 1,
                label: '男',
              },
              {
                value: 2,
                label: '女',
              },
            ]}
          />
          <ProFormText width="md" name="account" label="账号" disabled={!!id} />
          <ProFormText.Password width="md" name="password" label="密码" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
