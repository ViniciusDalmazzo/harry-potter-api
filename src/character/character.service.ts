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

  async getById(id: string) {
  }

  async update(id: string, character: Character) {
    await this.characterModel.updateOne({ _id: id}, character).exec()
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.characterModel.deleteOne({_id: id}).exec()
  }

  async getAll(){
    const result = await this.characterModel.find().exec();
    return result;
  }
}