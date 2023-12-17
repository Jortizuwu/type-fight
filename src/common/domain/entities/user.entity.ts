import { Role } from 'src/common/infrastructure/decorators/roles';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEnity {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  userName: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  last_login?: Date;

  @Column('varchar', { nullable: true })
  hach_refresh_token: string;

  @CreateDateColumn({ name: 'createdate' })
  createdate: Date;

  @UpdateDateColumn({ name: 'updateddate' })
  updateddate: Date;

  @Column({
    default: 'user',
    type: 'varchar',
  })
  role: Role;
}
