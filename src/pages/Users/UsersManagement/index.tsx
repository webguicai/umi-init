import { ProTable, PageContainer } from '@ant-design/pro-components';
import type { ProColumnType } from '@ant-design/pro-components';
import { UsersControllerUsersList } from '@/services/system-interface/yonghujiekou';
import { Button, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';

export default () => {
  const columns: ProColumnType<any>[] = [
    {
      dataIndex: 'index',
      valueType: 'index',
      width: 48,
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
    },
    {
      title: '姓名',
      dataIndex: 'userName',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      valueType: 'select',
      valueEnum: {
        0: {
          text: '未知',
        },
        1: {
          text: '男',
        },
        2: {
          text: '女',
        },
      },
    },
    {
      title: '操作',
      dataIndex: 'options',
      hideInSearch: true,
      render: (text, record) => {
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={() => history.push('/users/usersManagement/userEdit', { id: record.id })}
            >
              编辑
            </Button>
            <Popconfirm title="系统提示" description="是否确认删除">
              <Button type="link" size="small" style={{ color: '#ff4d4f' }}>
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
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
          ],
        },
      }}
    >
      <ProTable
        columns={columns}
        rowKey="id"
        request={async (params: API.UsersControllerUsersListParams) => {
          const res = await UsersControllerUsersList(params);
          return res;
        }}
        toolBarRender={() => [
          <Button type="primary" icon={<PlusOutlined />}>
            新增
          </Button>,
        ]}
      />
    </PageContainer>
  );
};
