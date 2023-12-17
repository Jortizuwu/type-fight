import { IUserModel } from '../../user/model/user-model.interface';

export class IHistoryModel {
  id: string;
  createdate: Date;
  updateddate: Date;
  isActive: boolean;
  owners: IUserModel[];
}
