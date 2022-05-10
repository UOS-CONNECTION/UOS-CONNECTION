// type orm user
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import UserEntity from './user.entity';

@Entity()
class UserInfo {
	@PrimaryGeneratedColumn()
	_id!: number;

	@Column('text', { nullable: true })
	proved_at: string;

	@Column('int', { nullable: true })
	share_cnt: number;

	@Column('text', { nullable: true })
	location: string;

	@Column('text', { nullable: true })
	contact_time: string;

	@OneToOne(() => UserEntity, (user) => user._id)
	user_id: UserEntity;
}

export default UserInfo;
