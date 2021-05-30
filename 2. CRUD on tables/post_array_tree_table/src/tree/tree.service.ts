import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';
import { Tree } from './entities/tree.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TreeService {
  constructor(
    @InjectRepository(Tree) private treeRepository: Repository<Tree>,
  ) {}

  //post array of trees using Tree entity directly --here you have to enter in postman treeName, treeSpecies, treeAge
  createRowsUsingTreeEntity(createTree: Tree[]) {
    console.log(createTree);
    return this.treeRepository.save(createTree); //it will save directly because the col names of db are same as entered by the user in postman
  }

  //post array of trees using DTo
  createRowsUsingDto(createTreeDto: CreateTreeDto[]) {
    console.log(createTreeDto);
    console.log(createTreeDto.length);
    // return this.treeRepository.save(createTreeDto); --you can't write it because user has entered different fields than in columns
    //you should map the columns entered by user to columns in table
    let trees: Tree[] = [];

    createTreeDto.map((item) => {
      let tree = new Tree();
      tree.treeName = item.name;
      tree.treeSpecies = item.species;
      tree.treeAge = item.age;
      trees.push(tree);
    });
    //display the collected fields from user
    trees.map((item: Tree) => {
      console.log(item);
    });
    console.log(trees);
    return this.treeRepository.save(trees);
  }

  //post array of trees using DTO sir method
  createRowsUsingDtoBySir(createTreeDto: CreateTreeDto[]) {
    const tree_objects = createTreeDto.map((item) => {
      return {
        treeName: item.name, //you are just assigning the name taken from dto to a variable named treeName
        treeSpecies: item.species,
        treeAge: item.age,
      };
    });
    return this.treeRepository.save(tree_objects);
  }

  findAll() {
    //return this.treeRepository.find();
    return this.treeRepository.find().then((data) => {
      //can customize the result got
      const result = data.map((item) => ({
        name: item.treeName,
        age: item.treeAge,
      }));
      return Promise.resolve(result);
    });
  }

  findOne(id: number) {
    // return this.treeRepository.findOne(id);
    //customize the status code
    return this.treeRepository.findOne(id).then((data) => {
      //it is a promise, can use async and await, here im using then
      if (!data) throw new NotFoundException(); //HttpException is common class
      // if (!data) throw new HttpException({},204);   no content irrespective of what msg u give it will not come
      return data;
    });
  }

  //PATCH /tree/1 with body
  update(id: number, updateTreeDto: UpdateTreeDto) {
    //updatetreedto has inherited createtreeDto, if you don't want this Dto, you can delete it & write CreateTreeDto here
    console.log(id);
    return this.treeRepository.update(
      { treeId: id },
      {
        treeName: updateTreeDto.name,
        treeSpecies: updateTreeDto.species,
        treeAge: updateTreeDto.age,
      },
    );
  }

  remove(id: number) {
    return this.treeRepository.delete({ treeId: id });
  }
}
