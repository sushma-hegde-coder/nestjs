import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';
import { Tree } from './entities/tree.entity';
import { Repository } from 'typeorm';

//using typeorm you will implement repository pattern
//create a repository first
//we need to inject an object of repositoryin the constructor
// entity means table
// respository means data storage
// entity is the table, we need to create repository of that table
//create entity, create a repository from that entity, that repository gives you the functions
@Injectable()
export class TreeService {
  constructor(
    @InjectRepository(Tree) private treeRepository: Repository<Tree>, //inject repository object for the Tree table, for tree table repository is created
  ) {}
  create(createTreeDto: CreateTreeDto) {
    /*create (createTreeDto: Tree) is allowed*/
    //no need to use dto compulsorily...recommonded to have a DTO to give a proper info to end user
    return this.treeRepository.save({
      treeName: createTreeDto.name,
      treeSpecies: createTreeDto.species,
      treeAge: createTreeDto.age,
    });
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
