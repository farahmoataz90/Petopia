import React from 'react';
import './fulldash.css';
import HeaderDash from './HeaderDash'
import SideBar from './SideBar';
import DashContent from './DashContent';
import Footer from '../footer/Footer';

function FullDashbord() {
  return (
   <>
   <HeaderDash />
   <SideBar />
   <DashContent />
   <Footer />
   </>
  )
}

export default FullDashbord