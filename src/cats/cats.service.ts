import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { ICat } from './cat.interface';
import { Cat } from './cat.model';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  getCats(): Promise<ICat[]> {
    return this.catsRepository.find();
  }

  addCat(cat: ICat): Promise<InsertResult> {
    return this.catsRepository.insert(cat);
  }
}
