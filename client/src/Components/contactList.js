import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contacts";
import Contact from "./contact";
import { Dimmer, Loader } from "semantic-ui-react";

const ContactList = ({ s }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loadContacts = useSelector(
    (state) => state.contactReducer.loadContacts
  );
  useEffect(() => {
    dispatch(getContacts(s));
  }, [s]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {loadContacts ? (
          <Dimmer active>
            <Loader content="Loading" />
          </Dimmer>
        ) : (
          contacts.map((el) => <Contact key={el._id} contact={el} s={s} />)
        )}
      </div>
    </div>
  );
};

export default ContactList;
