import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import ContactList from "./Components/contactList";
import Add from "./Components/add";
import { Search, Menu, Header, Image } from "semantic-ui-react";
import { toggleFalse } from "./JS/actions/edit";
import { useDispatch } from "react-redux";
function App() {
  const [activeItem, setactiveItem] = useState("home");
  const [searchItem, setsearchItem] = useState("all");
  const handleSearchChange = (e) => {
    setsearchItem(e.target.value);
  };
  const handleItemClick = (e) => {
    setactiveItem(e.target.value);
  };
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <Menu pointing>
          <Link to="/">
            <Menu.Item>
              {" "}
              <Header as="h2">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
                />{" "}
                Contact List
              </Header>
            </Menu.Item>
          </Link>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={(e) => handleItemClick(e)}
          >
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item
            name="Add a new contact"
            active={activeItem === "Add a new contact"}
            onClick={(e) => {
              handleItemClick(e);
              dispatch(toggleFalse());
            }}
          >
            <Link to="/add">Add a new contact</Link>
          </Menu.Item>
          <Menu.Item>
            <Search
              onSearchChange={(e) => {
                handleSearchChange(e);
              }}
              value={searchItem}
              defaultValue={"all"}
              showNoResults={false}
            />
          </Menu.Item>
        </Menu>
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <ContactList {...props} s={searchItem} />}
        />
        <Route
          path={["/add", "/edit/:id"]}
          render={(props) => <Add {...props} s={searchItem} />}
        />
      </Switch>
    </div>
  );
}

export default App;
