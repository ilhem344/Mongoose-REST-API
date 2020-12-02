import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteContact, getContact } from "../JS/actions/contacts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTrue } from "../JS/actions/edit";
import { Dropdown } from "semantic-ui-react";

const Contact = ({ contact, s }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "20px" }}>
      {" "}
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>{contact.name}</Card.Header>
          <Card.Meta>{contact.phone}</Card.Meta>
          <Card.Description>{contact.email} </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Dropdown text="Menu">
            <Dropdown.Menu>
              <Link to={`/edit/${contact._id}`}>
                <Dropdown.Item
                  text="Open..."
                  onClick={() => {
                    dispatch(toggleTrue());
                    dispatch(getContact(contact._id));
                  }}
                />
              </Link>
              <Dropdown.Item
                icon="trash"
                text="Move to trash"
                onClick={() => {
                  dispatch(deleteContact(contact._id, s));
                }}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Contact;
