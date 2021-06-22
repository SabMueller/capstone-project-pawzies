import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  street: String,
  zip: Number,
  city: String,
});

const Organization = mongoose.model('Organization', organizationSchema);

export default Organization;
