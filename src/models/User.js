
import mongoose from "mongoose"

// define schema for customer user
const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: Buffer,
  },
  profilePictureType: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
  // other fields specific to customer users
});

// define schema for vendor user
const vendorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: Buffer,
  },
  profilePictureType: {
    type: String,
  },
  businessName: {
    type: String,
    required: true,
  },
  businessAddress: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
  // other fields specific to vendor users
});


// Virtuals 
customerSchema.virtual('userPicture').get(function() {
  if (this.profilePicture != null && this.profilePictureType != null) {
    return `data:${this.profilePictureType};charset=utf-8;base64,${this.profilePicture.toString('base64')}`
  }
  return undefined
})
vendorSchema.virtual('userPicture').get(function() {
  if (this.profilePicture != null && this.profilePictureType != null) {
    return `data:${this.profilePictureType};charset=utf-8;base64,${this.profilePicture.toString('base64')}`
  }
  return undefined
})



// create models for each user type
const Customer = mongoose.model('Customer', customerSchema);
const Vendor = mongoose.model('Vendor', vendorSchema);




export { Customer, Vendor}