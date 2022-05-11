import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../common/common.entity';

@Entity()
export class UserEntity extends CommonEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
