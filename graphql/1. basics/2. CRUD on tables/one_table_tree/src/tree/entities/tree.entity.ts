import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'my_tree' }) //here I changed name of table tree as my_tree if you want to have same name give it as 'tree'
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
