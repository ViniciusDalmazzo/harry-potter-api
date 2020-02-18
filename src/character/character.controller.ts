import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.model';

@Controller('character')
export class CharacterController {
  constructor(private service: CharacterService) {
  }

  @Get()
  get(@Param() params) {
    return this.service.findById(params.id);
  }

  @Post()
  create(@Body() Character: Character) {
    return this.service.create(Character);
  }

  @Put()
  update(@Body() Character: Character) {
    return this.service.update(Character);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.service.remove(params.id);
  }
}