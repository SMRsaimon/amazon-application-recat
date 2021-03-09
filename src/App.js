import React from "react";
import "./App.css";
import Header from "./mycomponents/Header/Header";
import Shop from "./mycomponents/Header/Shop/Shop";
import OrderReview from "./mycomponents/OrderReview/OrderReview";
import Inventory from "./mycomponents/Inventory/Inventory";
import NotFound from "./mycomponents/NotFound/NotFound";
import BodyContent from "./mycomponents/BodyContent/BodyContent.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from "./mycomponents/ProductDetails/ProductDetails";



function App() {


  return (

    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <BodyContent></BodyContent>
        </Route>
        <Route path="/Shop">
          <BodyContent></BodyContent>

        </Route>
        <Route path="/Review">

          <OrderReview></OrderReview>

        </Route>
        <Route path="/Inventory">

          <Inventory></Inventory>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
        </Route>

        <Route path="*">

          <NotFound></NotFound>
        </Route>

      </Switch>

    </Router>

  );
}

export default App;
