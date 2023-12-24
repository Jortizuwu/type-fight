// import { UserEnity } from 'src/common/domain/entities/user.entity';
import { IUserModel } from '../../user/model/user-model.interface';

export interface ICreateMatchDto {
  id: string;
  player: IUserModel;
}
