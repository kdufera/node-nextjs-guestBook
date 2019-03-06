import React, { Component } from 'react';
import Router from 'next/router'
import axios from 'axios';
import Home from './home';
import Head from 'next/head'





import { Button } from 'reactstrap';


 class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
   <div className="container">
      <Home/>

      <style type="text/css">
        {`
        .container {
          text-align:center;
          padding-left:15%;
          padding-right:15%;
        }
        label {
          display: inline-block;
      }

        `}
    </style>
 </div>

      );
    }
}

export default Index;

