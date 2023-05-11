export type UserInfo = {
    username: string,
    userId: string,
    userRole: string
  }
  
export interface IUserState {
    user: {
      error: boolean,
      userInfo: UserInfo | null
    }
  }