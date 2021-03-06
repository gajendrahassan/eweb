import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import  Product from './components/Product';
import Cart from './components/Cart';
import  Detail from './components/Detail';
import  Default from './components/Default';
import  Model from './components/Modal';


class App extends Component {
  render() {
    return (
   <React.Fragment>

     <Navbar/>
     <Switch>
       <Route exact path="/" component={ProductList}/>
       <Route path="/details" component={Detail}/>
       <Route path="/cart" component={Cart}/>
       <Route component={Default}/>

       </Switch>
 
<Model/>
   </React.Fragment>

     
    );
  }
}

export default App;
