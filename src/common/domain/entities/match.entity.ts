import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { UserEnity } from './user.entity';

@Entity({
  name: 'matchs',
})
export class MatchEnity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'createdate' })
  createdate: Date;

  @UpdateDateColumn({ name: 'updateddate' })
  updateddate: Date;

  @ManyToMany(() => UserEnity, (user) => user.uid)
  owners: UserEnity[];
}
