import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { UserEnity } from './user.entity';

@Entity({
  name: 'match',
})
export class MatchEnity {
  @PrimaryColumn({
    type: 'uuid',
  })
  id: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'createdate' })
  createdate: Date;

  @UpdateDateColumn({ name: 'updateddate' })
  updateddate: Date;

  @Column({ name: 'finishdate', nullable: true })
  finishdate: Date;

  @Column({
    default: 'pending',
    type: 'varchar',
  })
  status: string;

  @ManyToMany(() => UserEnity, (user) => user.uid, {
    cascade: true,
  })
  @JoinTable({
    name: 'room',
  })
  players: UserEnity[];

  @ManyToOne(() => UserEnity, (user) => user.wonMatches, { nullable: true })
  winner: UserEnity | null;
}
