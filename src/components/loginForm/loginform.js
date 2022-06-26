import React from 'react'
import './loginForm.css'

export default class Loginform extends React.Component {
    render() {
      return (
        <div>
          <form>
          <h3>Log In</h3>
          <input type="text" placeholder ='email'/>
          <input type="text" placeholder = 'password' />
          
        </form>
        </div>
        
        

        

      );
    }
}

