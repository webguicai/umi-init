import { ProTable, PageContainer } from '@ant-design/pro-components';
import type { ProColumnType, ActionType } from '@ant-design/pro-components';
import {
  UsersControllerUsersList,
  UsersControllerDeleteUser,
} from '@/services/system-interface/yonghujiekou';
import { Button, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { useRef } from 'react';

export default () => {
  const actionRef: { current: ActionType | undefined } = useRef();

  const deleteUser = (id: string) => {
    UsersControllerDeleteUser({ id })
      .then((res) => {
        message.success(res.message);
        actionRef.current?.reload();
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const columns: ProColumnType<any>[] = [
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
      title: '账号',
      dataIndex: 'account',
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
              onClick={() => history.push('/system/usersManagement/userEdit', { id: record.id })}
            >
              编辑
            </Button>
            <Popconfirm
              title="系统提示"
              description="是否确认删除"
              onConfirm={() => {
                deleteUser(record?.id);
              }}
            >
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
              path: '/system',
              title: '系统管理',
            },
            {
              path: '/usersManagement',
              title: '用户管理',
            },
          ],
        },
      }}
    >
      <ProTable
        columns={columns}
        rowKey="id"
        actionRef={actionRef}
        request={async (params: API.UsersControllerUsersListParams) => {
          const res = await UsersControllerUsersList(params);
          return res;
        }}
        toolBarRender={() => [
          <Button
            key="add"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => history.push('/system/usersManagement/userEdit')}
          >
            新增
          </Button>,
        ]}
      />
    </PageContainer>
  );
};
