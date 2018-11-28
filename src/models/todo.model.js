import mongoose from 'mongoose';

const { Schema } = mongoose;

const Todo = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  content: {
    type: Schema.Types.String,
    required: true,
  },
  isDone: {
    type: Schema.Types.Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.model('todo', Todo);
