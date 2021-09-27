import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarComponents from "./Components/NavbarComponents";
import History from "./Pages/History";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import ProductCustom from "./Pages/ProductCustom";
import Login from "./Pages/Login";
import Report from "./Pages/Report";
import Revenue from "./Pages/Revenue";

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
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Report">
            <Report />
          </Route>
          <Route exact path="/Revenue">
            <Revenue />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
