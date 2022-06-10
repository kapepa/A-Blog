import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Post} from "../post/post.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Post, post => post.user)
  post: Post[];

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: false, select: false })
  isActive: boolean;
}