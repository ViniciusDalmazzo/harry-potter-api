import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('Characters')
@ApiTags('Characters')
export class CharacterController {
  constructor(private service: CharacterService) {
  }

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() Character: Character) {
    return this.service.create(Character);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() character: Character) {
    return this.service.update(id, character);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}