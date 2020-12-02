import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { editContact, postContact } from "../JS/actions/contacts";
import { Link } from "react-router-dom";

const Add = ({ s }) => {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.contactReducer.user);
  const [user, setuser] = useState({ name: "", email: "", phone: "" });
  const edit = useSelector((state) => state.editReducer.edit);
  useEffect(() => {
    edit ? setuser(userReducer) : setuser({ name: "", email: "", phone: "" });
  }, [edit, userReducer]);
  const handleContact = () => {
    if (!edit) {
      dispatch(postContact(user, s));
    } else {
      dispatch(editContact(user, userReducer._id, s));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        marginTop: "50px",
        // width: "500px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form>
        <Form.Field>
          <label> Name</label>
          <input
            placeholder="Enter your Name"
            value={user.name}
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Enter your Email"
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            placeholder="Enter your phone"
            value={user.phone}
            name="phone"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Field>
        <Link to="/">
          {" "}
          <Button type="submit" onClick={() => handleContact()}>
            {edit ? "Edit" : "Save"}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Add;
