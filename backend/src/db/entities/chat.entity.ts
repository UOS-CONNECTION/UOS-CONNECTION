// type orm user
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

import PostEntity from './post.entity';
import UserEntity from './user.entity';

@Entity()
class Chat {
	@PrimaryGeneratedColumn()
	_id!: number;

	@OneToOne(() => UserEntity, (user) => user._id)
	user_id1: number;

	@OneToOne(() => UserEntity, (user) => user._id)
	user_id2: number;

	@OneToMany(() => PostEntity, (post) => post._id)
	post_id: number;

	@Column('timestamp', { nullable: true })
	updated_at: Timestamp;

	@Column('timestamp', { nullable: true })
	created_at: Timestamp;
}

export default Chat;
