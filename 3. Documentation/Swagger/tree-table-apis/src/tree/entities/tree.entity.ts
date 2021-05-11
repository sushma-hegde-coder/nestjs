import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'my_tree' }) //here I changed name of table tree as my_tree this is optional, if you want to have table as it is leave it
export class Tree {
  @PrimaryGeneratedColumn()
  treeId: number;

  @Column({ nullable: false })
  treeName: string;

  @Column()
  treeSpecies: string;

  @Column()
  treeAge: number;
}
