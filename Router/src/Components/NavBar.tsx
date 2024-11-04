import React from "react";
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <Link to='/'><button>Home</button></Link>
      <Link to='/news'><button>News</button></Link>
      <Link to='/sport'><button>Sport</button></Link>
    </div>
  );
};

export default NavBar;
