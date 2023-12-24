import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMatchDto {
  @IsUUID()
  @IsNotEmpty()
  @IsString()
  uid: string;
}
