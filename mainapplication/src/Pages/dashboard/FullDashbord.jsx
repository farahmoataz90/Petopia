import React from 'react';
import './fulldash.css';
import HeaderDash from './HeaderDash'
import SideBar from './SideBar';
import DashContent from './DashContent';
import Footer from '../footer/Footer';
import BackToTop from './BackToTop';

function FullDashbord() {
  return (
   <>
   <HeaderDash />
   <SideBar />
   <DashContent />
   <Footer />
   <BackToTop />
   </>
  )
}

export default FullDashbord