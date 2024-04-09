import React from 'react'
import './sideBar.css'
import navList from '../data/navItem';

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className="sidebar-nav" id='sidebar-nav'>
            <li className="nav-item">
               <a className="nav-link" href="/">
                  <span className="bi bi-grid"></span>
                  <span>Dashboard</span>
               </a>
            </li>

            <li className="nav-item">
                <a className='nav-link collapsed'
                   data-bs-target="#components-nav"
                    data-bs-toggle="collapse"
                    href='#'
                >
                    <i className='bi bi-meni-bottom-wide'></i>
                    <span>Documents</span>
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

            <li className="nav-item">
                <a className='nav-link collapsed'
                   data-bs-target="#forms-nav"
                    data-bs-toggle="collapse"
                    href='#'
                >
                    <i className='bi bi-meni-bottom-wide'></i>
                    <span>Forms</span>
                    <i className='bi bi-chevron-down ms-auto'></i>

                </a>

                <ul
                    id='forms-nav'
                    className='nav-content collapse'
                    data-bs-parent ="#sidebar-nav"

                >
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Application Form</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Release Form</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Cancellation Form</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <a className='nav-link collapsed'
                   data-bs-target="#tables-nav"
                    data-bs-toggle="collapse"
                    href='#'
                >
                    <i className='bi bi-layout-text-window-reverse'></i>
                    <span>Tables</span>
                    <i className='bi bi-chevron-down ms-auto'></i>

                </a>
                <ul
                    id='forms-nav'
                    className='nav-content collapse'
                    data-bs-parent ="#sidebar-nav"

                >
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>General Tables</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Data Tables</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <a className='nav-link collapsed'
                   data-bs-target="#charts-nav"
                    data-bs-toggle="collapse"
                    href='#'
                >
                    <i className='bi bi-bar-chart'></i>
                    <span>Charts</span>
                    <i className='bi bi-chevron-down ms-auto'></i>

                </a>
                <ul
                    id='forms-nav'
                    className='nav-content collapse'
                    data-bs-parent ="#sidebar-nav"

                >
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>chart.js</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Apex charts</span>
                        </a>
                    </li>
                </ul>
            </li>



            <li className='nav-heading'>Pages</li>
            {navList.map(nav=>(
                <li className='nav-item' key={nav._id}>
                    <a className='nav-link collapsed' href='#'>
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