declare namespace API {
  type CreateUserDto = {
    /** 账号 */
    account: string;
    /** 密码 */
    password: string;
    /** 验证码 */
    code: string;
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
    /** 昵称 */
    nickName: string;
    /** 手机号 */
    phone: string;
    /** 性别 */
    gender: string;
  };

  type UsersControllerUsersListParams = {
    /** 昵称 */
    nickName?: string;
    /** 手机号 */
    phone?: string;
    /** 当前页数 */
    current: number;
    /** 每页条数 */
    pageSize: number;
  };
}
