import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarComponents from "./Components/NavbarComponents";
import History from "./Pages/History";
import RacikHistory from "./Pages/RacikHistory";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import ProductCustom from "./Pages/ProductCustom";
import Report from "./Pages/Report";
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Forbidden from "./Pages/Forbidden";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponents />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/Products">
            <ProductsPage />
          </Route>
          <Route exact path="/ProductCustom">
            <ProductCustom />
          </Route>
          <Route exact path="/Transaction">
            <History />
          </Route>
          <Route exact path="/RacikTransaction">
            <RacikHistory />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Report">
            <Report />
          </Route>
          <Route exact path="/Forbidden">
            <Forbidden />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
