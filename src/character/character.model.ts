import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean },
  house: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date },
});

export interface Character extends Document{
  id: string;
  name: string;
  active: boolean;
  house: string;
  image: string;  
  createdAt: Date;
}