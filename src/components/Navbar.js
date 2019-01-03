import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './button';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
    <Navwrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">

{/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
<Link to='/'>
<img src={logo} alt="store" srcset="" className="navbar-brand"/>
</Link>
<ul className="navbar-nav align-item-center">

<li className="nav-item ml-5">
<Link to="/" className="nav-link">
products
</Link>
</li>

</ul>

<Link to="/cart" className="ml-auto">
<ButtonContainer>
<i className="fas fa-cart-plus"/>Mycart
</ButtonContainer>
</Link>
    </Navwrapper>
    );
  }
}

const Navwrapper = styled.nav`

background-color:var(--mainBlue);
.nav-link{
  color: var(--mainwhite) !important;
text-transform:capitalize;
font-size:1.3rem;
}


`;
