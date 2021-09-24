import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Badge from "@material-ui/core/Badge";
import "../Styles/Components/Navbar.css";
import { Link } from "react-router-dom";

export default function NavbarComponents() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        {/* <Navbar.Brand style={{ marginLeft: 20 }}>
          <Link className="LinkRoute"  to="/">
          Pharmacy
          </Link>
        </Navbar.Brand> */}
        <Container style={{ width: "fit-content" }}>
          <Nav>
            <Nav.Link>
              <Link to="/" className="LinkRoute">
                Home
              </Link>
            </Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link className="LinkRoute" to="/ProductCustom">
                  Product Custom
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="LinkRoute" to="/Products">
                  Product
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link className="LinkRoute" to="/Transaction">
                User Transaction
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="LinkRoute" to="/Report">
                Sales Report
              </Link>
            </Nav.Link>
          </Nav>
        </Container>

        <div style={{ marginRight: 20 }}>

            <Link className="LinkRoute" to="/Login">
              Login
            </Link>
        </div>

        <div style={{ marginRight: 20 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </div>
      </Navbar>
    </div>
  );
}
