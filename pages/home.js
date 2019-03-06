import React, { Component } from 'react';
import Router from 'next/router'
import axios from 'axios';
import Link from 'next/link'



 class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Message: ''
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


/**
 * 
 * @param {*} event 
 */
  handleChangeName(event) {
     this.setState({Name: event.target.value });
  }

/**
 * 
 * @param {*} event 
 */
handleChangeMessage(event) {
  this.setState({Message: event.target.value });
}

/**
 * 
 * @param {*} event 
 */

handleSubmit(event) {
    event.preventDefault();
    const userPost = {
      name: this.state.Name ,
      message: this.state.Message
    };

    console.log(this.state.Name + "  " + this.state.Message);
  

    axios.post(`http://localhost:3000/api/guestbook`, { userPost })
      .then(res => {
        if(res != "") {
          console.log(res);
          console.log(res.data);
        }
      });
}

  displayguestBook () {
    Router.push('/guestBook')
  }

  render() {
 
    return (

   <div className="container">
  
    <a className='photoLink'  onClick={this.displayguestBook}> Guestbook </a>
    
    
    <hr></hr>
    <div class="card">

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input  type="text" name="name" value={this.state.value} onChange={this.handleChangeName} required />
        </label>
        <label>
          Message:
          <input type="text" name="message" value={this.state.value} onChange={this.handleChangeMessage} required />
        </label>
        <input type="submit" value="Submit" />
      </form>    
      </div>

 </div>

      );
    }
}

export default Home;

