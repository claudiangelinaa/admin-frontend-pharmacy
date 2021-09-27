import React, { useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Badge from "@material-ui/core/Badge";
import "../Styles/Components/Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, doLogout } from "../Store/Actions/authAction";
import authReducer from '../Store/Reducers/authReducer'

export default function NavbarComponents() {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogoutClick = () => {
    dispatch(doLogout());
    console.log("logout");
    history.push("/");
    localStorage.removeItem("access_token")
  }

  const handleForbidden=()=>{
    handleLogoutClick()
    history.push("/Forbidden")
  }
  const auth = useSelector((state) => state.authReducer)
  useEffect(()=>{
    dispatch(checkLogin())
    // console.log(auth);
  },[])

  return (
    <div>
      {console.log("auth:", auth)}
      {(auth.role.toLowerCase() !== 'admin' ) && (auth.isLogin === true) && handleForbidden()}
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
            <NavDropdown title="User Transaction" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link className="LinkRoute" to="/Transaction">
                  Obat Jadi
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="LinkRoute" to="/RacikTransaction">
                  Obat Racik
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link className="LinkRoute" to="/Report">
                Sales Report
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="LinkRoute" to="/Revenue">
                Revenue
              </Link>
            </Nav.Link>
          </Nav>
        </Container>

        <div style={{ marginRight: 20 }}>
            {
              // console.log("auth:", auth)
              auth.isLogin ? (
                <>
                  {auth.nama}
                  <Button variant="light" onClick={handleLogoutClick}>
                  Logout
                </Button>
                </>
              ) : (
                <Link className="LinkRoute" to="/Login">
                  Login
                </Link>
              )
            }
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
