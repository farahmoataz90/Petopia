import React from 'react';
import './icon.css';
import maini from "../assets/petopia.png";

function Icon() {

    const handleToggleSideBar =()=>{
        document.body.classList.toggle('toggle-sidebar');
    };

  return (
    <div className="d-flex align-items-center justify-content-between">
        <a href="/" className='logo d-flex align-items-center'>
           <span className='d-none d-lg-block'>
             <img src={maini} alt='logo'/>
           </span>
        </a>
        
        <i className='bi bi-list toggle-sidebar-btn'
           onClick={handleToggleSideBar}
        >
        </i>
    </div>
  )
}

export default Icon