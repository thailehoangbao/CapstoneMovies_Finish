import React, { Component } from 'react';
import Navbar from './_component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './_component/Footer';

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
}
