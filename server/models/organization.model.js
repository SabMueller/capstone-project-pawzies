import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String,
  address: String,
  postal_code: Number,
  location: String,
  picture: String,
});

const Organization = mongoose.model('Organization', organizationSchema);

export default Organization;
