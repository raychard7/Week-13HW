import React from 'react'
//not importing component remove "component" and "from"
import  './navbar.css'
export default class Navbar extends React.Component {
    render() {
      return (
        
  <ul>
    <li><a class="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>
        

      );
    }
}