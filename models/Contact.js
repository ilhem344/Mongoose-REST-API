const mongoose = require("mongoose");
const schema = mongoose.Schema;
const contactSchema = new schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
});
module.exports = Contact = mongoose.model("contact", contactSchema);
