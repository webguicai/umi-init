export default [
  { name: '登录', layout: false, path: '/login', component: './Login' },
  { path: '/welcome', name: '欢迎', component: './Welcome' },
  {
    name: '用户管理',
    path: '/users',
    routes: [
      { path: '/users', redirect: '/users/usersManagement' },
      {
        name: '用户列表',
        path: '/users/usersManagement',
        component: './Users/UsersManagement',
      },
      {
        name: '用户编辑',
        path: '/users/usersManagement/userEdit',
        component: './Users/UserEdit',
        hideInMenu: true,
      },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
