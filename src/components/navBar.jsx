import React from 'react';
//Stateless component
const NavBar = ({totalCounters})=>{
return (
<div>
<nav className="navbar navbar-light bg-light">
<a className="navbar-brand" href="www.facebook.com"> 
Navbar
<span className="badge bage-pill badge-secondary m-2">{totalCounters}</span>
</a>
</nav>   
</div>
 );
}
export default NavBar;


