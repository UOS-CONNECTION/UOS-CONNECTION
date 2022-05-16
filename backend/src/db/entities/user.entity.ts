// type orm user
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column('text', { nullable: false })
  email!: string;

  @Column('text', { nullable: false })
  pwd!: string;

  @Column('text', { nullable: false })
  nickname!: string;

  @Column('text', { nullable: true })
  img: string;

  // 매너 점수
  @Column('int', { nullable: true })
  manner_score: number;

  // 자기자신 소개
  @Column('text', { nullable: true })
  self_desc: string;

  // 신고 당한 횟수
  @Column('int', { nullable: true })
  reported_cnt: number;

  @Column('text', { nullable: true })
  favorite_post: string;

  @Column('timestamp', { nullable: false })
  updated_at: Timestamp;

  @Column('timestamp', { nullable: false })
  created_at: Timestamp;
}

export default User;
