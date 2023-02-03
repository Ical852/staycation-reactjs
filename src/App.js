import React from 'react'
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import DetailPage from 'pages/DetailPage';
import Checkout from 'pages/Checkout';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/properties/:id" component={DetailPage}/>
      <Route exact path="/checkout" component={Checkout}/>
    </Router>
  )
}

export default App;