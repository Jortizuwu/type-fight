import { MatchEnity } from 'src/common/domain/entities/match.entity';
import { Role } from 'src/common/infrastructure/decorators/roles';

export class IUserModel {
  uid: string;
  userName: string;
  createdate: Date;
  updateddate: Date;
  last_login?: Date;
  hach_refresh_token: string;
  isActive: boolean;
  role: Role;
  password: string;
  matches: MatchEnity[];
}

// export class IUserModel extends IUserWithoutPassword {
// }
