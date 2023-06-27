import { ProTable, PageContainer } from '@ant-design/pro-components';
import type { ProColumnType, ActionType } from '@ant-design/pro-components';
import {
  MenusControllerGetMenuList,
  MenusControllerDeleteMenu,
} from '@/services/system-interface/caidanjiekou';
import { Button, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { useRef } from 'react';

export default () => {
  const actionRef: { current: ActionType | undefined } = useRef();

  const deleteMenu = (id: number) => {
    MenusControllerDeleteMenu({ id })
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
      title: '菜单名称',
      dataIndex: 'menuName',
    },
    {
      title: '菜单编号',
      dataIndex: 'menuCode',
    },
    {
      title: '菜单状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        1: {
          text: '启用',
        },
        2: {
          text: '禁用',
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
              onClick={() => history.push('/system/menusManagement/menuEdit', { id: record.id })}
            >
              编辑
            </Button>
            <Popconfirm
              title="系统提示"
              description="是否确认删除"
              onConfirm={() => {
                deleteMenu(record?.id);
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
              path: '/menusManagement',
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
          const res = await MenusControllerGetMenuList(params);
          return res;
        }}
        toolBarRender={() => [
          <Button
            key="add"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => history.push('/system/menusManagement/menuEdit')}
          >
            新增
          </Button>,
        ]}
      />
    </PageContainer>
  );
};
