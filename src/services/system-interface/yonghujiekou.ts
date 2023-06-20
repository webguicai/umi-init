// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取验证码 获取验证码 GET /users/createCode */
export async function UsersControllerCreateCode(options?: { [key: string]: any }) {
  return request<any>('/users/createCode', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 注册 注册 POST /users/createUser */
export async function UsersControllerCreateUser(
  body: API.CreateUserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/users/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取登录用户信息 获取登录用户信息 GET /users/currentUser */
export async function UsersControllerCurrentUser(options?: { [key: string]: any }) {
  return request<any>('/users/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 登录 GET /users/login */
export async function UsersControllerLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UsersControllerLoginParams,
  options?: { [key: string]: any },
) {
  return request<any>('/users/login', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 退出登录 退出登录 GET /users/outLogin */
export async function UsersControllerOutLogin(options?: { [key: string]: any }) {
  return request<any>('/users/outLogin', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户详情 用户详情 GET /users/userDetail */
export async function UsersControllerUserDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UsersControllerUserDetailParams,
  options?: { [key: string]: any },
) {
  return request<any>('/users/userDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑用户 编辑用户 PATCH /users/userEdit */
export async function UsersControllerUserEdit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UsersControllerUserEditParams,
  options?: { [key: string]: any },
) {
  return request<any>('/users/userEdit', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户列表 用户列表 GET /users/usersList */
export async function UsersControllerUsersList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UsersControllerUsersListParams,
  options?: { [key: string]: any },
) {
  return request<any>('/users/usersList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
