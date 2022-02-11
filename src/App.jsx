import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import SuccessPayment from "./Pages/SuccessPayment";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/payment">
          <Payment />
        </Route>

        <Route path="/paid">
          <SuccessPayment />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
