export default [
  { name: '登录', layout: false, path: '/login', component: './Login' },
  { path: '/welcome', name: '欢迎', component: './Welcome' },
  {
    name: '系统管理',
    path: '/system',
    routes: [
      { path: '/system', redirect: '/system/usersManagement' },
      {
        name: '用户管理',
        path: '/system/usersManagement',
        component: './System/UsersManagement',
      },
      {
        name: '用户编辑',
        path: '/system/usersManagement/userEdit',
        component: './System/UsersManagement/UserEdit',
        hideInMenu: true,
      },
      {
        name: '菜单管理',
        path: '/system/menusManagement',
        component: './System/MenusManagement',
      },
      {
        name: '菜单编辑',
        path: '/system/menusManagement/menuEdit',
        component: './System/MenusManagement/MenuEdit',
        hideInMenu: true,
      },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
