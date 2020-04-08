import React, { useEffect } from 'react';
import Header from './components/Header';
import { connect } from "react-redux"
import Home from './components/Home';
import Cart from './components/Cart';
import { getCategories } from "./redux/action/userAction";
import { Switch, Route } from 'react-router-dom';


function App(props) {

  useEffect(() => {
    props.getCategories()
  })

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  getCategories
}

export default connect(null, mapDispatchToProps)(App)
