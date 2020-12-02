const express = require("express");
const router = express.Router();
const controllers = require("../controllers/contact.controllers");
//test
//path:localhost:8000/api/contact/test
router.get("/test", (req, res) => {
  res.send("hello");
});
//************************************************************ */
//@method Post
//path localhost:8000/api/contact/
// add a conatct
//params body
router.post("/", controllers.postContact);

//*********************************************************** */
//@method getallcontact
//path localhost:8000/api/contact/name/:s
// get all conatct
router.get("/name/:s", controllers.getAllContact);

//*********************************************************** */
//@method get contact byid
//path localhost:8000/api/contact/:id
// get one conatct by id
router.get("/:id", controllers.getContactById);

//************************************************************* */
//@method Delete contact byid
//path localhost:8000/api/contact/:id
// Delete one conatct by id
router.delete("/:id", controllers.deleteContact);

//*********************************************************** */
//@method Put contact
//path localhost:8000/api/contact/:id
// update contact by id
router.put("/:id", controllers.updateContact);
//Get contact by name
// @method get contact By name
//path localhost:8000/api/contact/:name
// router.get("/search/:name", controllers.getContactByName);

module.exports = router;
