declare namespace API {
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
