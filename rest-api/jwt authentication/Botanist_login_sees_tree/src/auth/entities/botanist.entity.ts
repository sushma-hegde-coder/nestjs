import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'botanist' })
export class BotanistEntity {
  @PrimaryGeneratedColumn('uuid')
  botId: string;

  @Column({ nullable: false, unique: true })
  botEmail: string;

  @Column({ nullable: false })
  botPassword: string;

  @Column({ nullable: false })
  botName: string;

  @Column({ type: 'datetime' })
  createdAt: Date;

  //hooks : tasks to be executed
  // this gets executed before every insert operation
  @BeforeInsert()
  async hashPassword() {
    this.botPassword = await bcrypt.hash(this.botPassword, 10); // hashed password
  }
}
