import { ICommon } from '../interfaces/ICommon';
import mongoose from 'mongoose';

const shareCode = new mongoose.Schema(
  {
    value: String,
    name: String,
    type: Number,
  }
);

export default mongoose.model<ICommon & mongoose.Document>('shareCode', shareCode, 'shareCode');
