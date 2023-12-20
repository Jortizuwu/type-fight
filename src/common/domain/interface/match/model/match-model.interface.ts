import { IUserModel } from '../../user/model/user-model.interface';

export class IMatchModel {
  id: string;
  createdate: Date;
  updateddate: Date;
  finishdate: Date;
  isActive: boolean;
  players: IUserModel[];
  status: string;
}
