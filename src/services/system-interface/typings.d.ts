declare namespace API {
  type CreateMenuDto = {
    /** 菜单名称 */
    menuName: string;
    /** 菜单编号 */
    menuCode: string;
    /** 菜单类型 */
    type: number;
    /** 父级菜单 */
    menuParentCode?: string;
    /** 菜单状态 */
    status: number;
  };

  type CreateUserDto = {
    /** 账号 */
    account: string;
    /** 密码 */
    password: string;
    /** 用户姓名 */
    userName: string;
    /** 电话 */
    phone: string;
    /** 性别 */
    gender: number;
  };

  type MenusControllerDeleteMenuParams = {
    id: number;
  };

  type MenusControllerGetMenuByTypeParams = {
    type: number;
  };

  type MenusControllerGetMenuDetailParams = {
    id: number;
  };

  type MenusControllerGetMenuListParams = {
    /** 菜单名称 */
    menuName: string;
    /** 菜单编号 */
    menuCode: string;
    /** 菜单状态 */
    status: string;
    /** 当前页数 */
    current: number;
    /** 每页条数 */
    pageSize: number;
  };

  type UpdateMenuDto = {
    /** 菜单名称 */
    menuName: string;
    /** 菜单编号 */
    menuCode: string;
    /** 菜单类型 */
    type: number;
    /** 父级菜单 */
    menuParentCode?: string;
    /** 菜单状态 */
    status: number;
    /** id */
    id: number;
  };

  type UsersControllerDeleteUserParams = {
    id: string;
  };

  type UsersControllerLoginParams = {
    /** 账号 */
    account: string;
    /** 密码 */
    password: string;
  };

  type UsersControllerUserDetailParams = {
    /** id */
    id: string;
  };

  type UsersControllerUserEditParams = {
    /** id */
    id: string;
    /** 手机号 */
    phone: string;
    /** 性别 */
    gender: string;
  };

  type UsersControllerUsersListParams = {
    /** 手机号 */
    phone?: string;
    /** 姓名 */
    userName?: string;
    /** 性别 */
    gender?: string;
    /** 当前页数 */
    current: number;
    /** 每页条数 */
    pageSize: number;
  };
}
