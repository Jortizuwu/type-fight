export class IUserModel {
  uid: string;
  userName: string;
  createdate: Date;
  updateddate: Date;
  last_login?: Date;
  hach_refresh_token: string;
  isActive: boolean;
  role: string;
  password: string;
}

// export class IUserModel extends IUserWithoutPassword {
// }
