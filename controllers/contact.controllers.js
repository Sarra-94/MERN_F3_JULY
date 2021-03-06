const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  try {
    //  email= req.body.email
    const findContact = await Contact.findOne({ email: req.body.email });
    if (findContact) {
      return res.status(400).send({ msg: "email should be unique" });
    }
    // step1 yasna3 f contact jdid
    const newContact = new Contact(req.body);
    //   base de donne (save async method + promisses)
    await newContact.save();
    res.status(200).send({ msg: "Add contact succ", contact: newContact });
  } catch (error) {
    res.status(400).send({ msg: "can not save the Contact", error });
  }
};

exports.getAllContact = async (req, res) => {
  try {
    const listContact = await Contact.find();
    res.status(200).send({ msg: "get all the contact", contacts: listContact });
  } catch (error) {
    res.status(400).send({ msg: "can not get contacts" });
  }
};

exports.getContact = async (req, res) => {
  try {
    const FindContact = await Contact.findById(req.params.id);
    res.status(200).send({ msg: "get it succ", contact: FindContact });
  } catch (error) {
    res.status(400).send({ msg: "can not get it", error });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete it succ" });
  } catch (error) {
    res.status(400).send({ msg: "ca not delete it" });
  }
};

exports.editContact = async (req, res) => {
  try {
    const r = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(r);
    if (r.modifiedCount) {
      return res.send({ msg: "updated" });
    }
    res.send({ msg: "there is no modification" });
  } catch (error) {
    res.send({ msg: "can not modify it" });
  }
};
