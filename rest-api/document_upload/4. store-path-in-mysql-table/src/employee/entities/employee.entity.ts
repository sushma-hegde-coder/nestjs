import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "employee" })
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;  

  @Column({ nullable: true, length: 50 })
  firstName: string;

  @Column({ nullable: true, length: 250 })
  profilePicture: string; 
}

