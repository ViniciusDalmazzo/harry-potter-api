import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Character } from './character.model';
import { Model } from 'mongoose';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel('Character') private readonly characterModel: Model<Character>,
  ) { }

  async create(doc: Character) {
    const result = await new this.characterModel(doc).save();
    return result;
  }

  async findById(id: number) {
  }

  async update(character: Character) {
  }

  async remove(character: Character) {
  }
}