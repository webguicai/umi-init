// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建菜单 创建菜单 POST /menus/createMenu */
export async function MenusControllerCreateMenu(
  body: API.CreateMenuDto,
  options?: { [key: string]: any },
) {
  return request<any>('/menus/createMenu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除菜单 删除菜单 DELETE /menus/deleteMenu */
export async function MenusControllerDeleteMenu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenusControllerDeleteMenuParams,
  options?: { [key: string]: any },
) {
  return request<any>('/menus/deleteMenu', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过类型获取菜单 通过类型获取菜单 GET /menus/getMenuByType */
export async function MenusControllerGetMenuByType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenusControllerGetMenuByTypeParams,
  options?: { [key: string]: any },
) {
  return request<any>('/menus/getMenuByType', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单详情 获取菜单详情 GET /menus/getMenuDetail */
export async function MenusControllerGetMenuDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenusControllerGetMenuDetailParams,
  options?: { [key: string]: any },
) {
  return request<any>('/menus/getMenuDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单列表 获取菜单列表 GET /menus/getMenuList */
export async function MenusControllerGetMenuList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenusControllerGetMenuListParams,
  options?: { [key: string]: any },
) {
  return request<any>('/menus/getMenuList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑菜单 编辑菜单 POST /menus/updateMenu */
export async function MenusControllerUpdateMenu(
  body: API.UpdateMenuDto,
  options?: { [key: string]: any },
) {
  return request<any>('/menus/updateMenu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
