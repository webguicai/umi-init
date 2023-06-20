import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormSelect,
  ProCard,
} from '@ant-design/pro-components';
import { message } from 'antd'
import { history } from '@umijs/max';
import {
  UsersControllerUserDetail,
  UsersControllerUserEdit,
} from '@/services/system-interface/yonghujiekou';

export default () => {
  const { id }: any = history?.location?.state;
  return (
    <PageContainer
      header={{
        breadcrumb: {
          items: [
            {
              path: '/users',
              title: '用户管理',
            },
            {
              path: '/usersManagement',
              title: '用户列表',
            },
            {
              path: '/userEdit',
              title: '用户编辑',
            },
          ],
        },
      }}
    >
      <ProCard className="proCardNoPaddingTop">
        <ProForm
          request={async () => (await UsersControllerUserDetail({ id })).data}
          onFinish={async (values: any) => {
            const res = await UsersControllerUserEdit({ id, ...values });
            if (res?.message === '成功') {
              message.success('修改成功')
              setTimeout(() => {
                history.go(-1)
              }, 700)
            }
          }}
        >
          <ProFormText width="md" name="nickName" label="昵称" />
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
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
