import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEnity {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column({
    unique: true,
  })
  userName: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
