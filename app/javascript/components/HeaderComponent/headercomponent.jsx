import React, { Component } from 'react';
import styles from './style.scss';

class HeaderComponent extends Component{
  render(){
    return (
      <div>
          <a href="/user">User</a>
          <a href="/home">Home</a>
      </div>
    )
  }
}
export default HeaderComponent;
