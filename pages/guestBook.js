import React, { Component } from 'react';
import Router from 'next/router'
import axios from 'axios';



 class GuestBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

 componentDidMount() {
    axios.get(`http://localhost:3000/api/get/guestbook`)
      .then(res => {
        const userData = res.data;
        console.log(userData)
        this.setState({ userData });
     });
  }

 backToHomePage () {
    Router.push('/')
}

  render() {
    return (
   <div className="container">
  
   
    <a className='photoLink'  onClick={this.backToHomePage} > <p> Back</p> </a>
      <hr></hr>
        { this.state.userData.map(user => <p key={user.key}> {user.key} {` :  `}{user.name}  {user.message}</p>)}
        <style global jsx>{`
        
        .container {
          text-align:center;
          padding-left:15%;
          padding-right:15%;
        }
      `}</style>
 </div>
      );
    }
}

export default GuestBook;