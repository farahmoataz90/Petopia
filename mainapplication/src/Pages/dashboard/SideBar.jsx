import React from 'react';
import './sidebar.css';
import navList from '../data/navItem';

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
    <ul className="sidebar-nav" id='sidebar-nav'>
        <li className="nav-item">
           <a className="nav-link" href="/">
              <span className="bi bi-grid"></span>
              <span className='title'>Dashboard</span>
           </a>
        </li>

        <li className="nav-item">
            <a className='nav-link collapsed'
               data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href='#'
            >
                <i className='bi bi-menu-button-wide'></i>
                <span className='title'>Documents</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul
                id='components-nav'
                className='nav-content collapse'
                data-bs-parent ="#sidebar-nav"

            >
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Customers</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Suppliers</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Logistics</span>
                    </a>
                </li>

            </ul>
        </li>

       

  

        <li className='nav-heading'>Pages</li>
        {navList.map(nav=>(
            <li className='nav-item' key={nav._id}>
                <a className='nav-link collapsed orange' href='#'>
                    <i className={nav.icon}></i>
                    <span>{nav.name}</span>
                </a>
            </li> 
        ))}

    </ul>



</aside>
  )
}

export default SideBar