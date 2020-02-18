import { Document } from 'mongoose';

export interface Character extends Document{
  id: string;
  name: string;
  active: boolean;
  house: string;
  image: string;  
  createdAt: Date;
}