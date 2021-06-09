import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  gender: String,
  breed: String,
  characteristics: Array,
  description: String,
  pciture: String,
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
