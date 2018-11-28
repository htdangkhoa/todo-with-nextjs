import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";

export default class CustomNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onToogleNavBar = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          Brand
        </NavbarBrand>
        <NavbarToggler
          onClick={this.onToogleNavBar.bind(this)}
          className="mr-2"
        />
        <Collapse isOpen={this.state.collapsed} navbar>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink>Hello</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Hello</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
