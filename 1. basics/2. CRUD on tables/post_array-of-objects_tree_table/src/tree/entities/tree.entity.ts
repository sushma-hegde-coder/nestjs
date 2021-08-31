import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'my_tree' })
export class Tree {
  //can I declare parameterised constructor here ???????
  // Tree(treeId, treeName, treeSpecies, treeAge) {
  //   treeId = 1000;
  //   treeName = 'hello';
  //   treeSpecies = 'hi';
  //   treeAge = 200;
  // }
  @PrimaryGeneratedColumn()
  treeId: number;

  @Column({ nullable: false })
  treeName: string;

  @Column()
  treeSpecies: string;

  @Column()
  treeAge: number;
}
