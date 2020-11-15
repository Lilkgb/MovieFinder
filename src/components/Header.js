import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return(
    <div className="header">
      <h2 className="customFont home">Movie Finder</h2>
      <input placeholder="search"/>
      <h2>user info</h2>
    </div>
  )
}

export default Header
