import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean },
  house: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date },
});