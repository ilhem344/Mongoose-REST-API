const Contact = require("../models/Contact");
//********************POSTCONTACt********************************* */
exports.postContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    let resulte = await Contact.findOne({ email: req.body.email });
    if (resulte) {
      res.status(400).json("user already exists");
      return;
    }
    let result = await newContact.save();
    res.status(200).send({ message: "contact added", newContact });
  } catch (error) {
    res.status(500).send({ message: "failed to add the contact" });
  }
};

//*******************UPDATECONTACT************************* */
exports.updateContact = async (req, res) => {
  try {
    let result = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.status(200).send({ message: "Contact Updated" });
  } catch (error) {
    res.status(400).send({ message: " we can not update " });
  }
};
//******************GETALLCONTACT************************** */
exports.getAllContact = async (req, res) => {
  try {
    const { s } = req.params;
    if (s !== "all") {
      let result = await Contact.find({
        name: new RegExp(s),
      });
      res.status(200).json({ message: "all contact", result });
    } else {
      let result = await Contact.find();
      res.status(200).json({ message: "all contact", result });
      return;
    }
  } catch (error) {
    res.status(400).send({ message: "failed " });
  }
};
//********************DELETECONTACT********************** */
exports.deleteContact = async (req, res) => {
  try {
    let result = await Contact.findByIdAndDelete(req.params.id);
    res.send({ message: "Contact deleted" });
  } catch (error) {
    res.status(400).send({ message: "No contact found  " });
  }
};
//*****************GETCONTACTBYID************************** */
exports.getContactById = async (req, res) => {
  try {
    let result = await Contact.findById(req.params.id);
    res.send({ message: "all contact", result });
  } catch (error) {
    res.status(400).send({ message: "No contact found  " });
  }
};
