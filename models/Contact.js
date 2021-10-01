const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  phone: Number,
  adresse: String,
});

module.exports = Contact = mongoose.model("contact", contactSchema);
