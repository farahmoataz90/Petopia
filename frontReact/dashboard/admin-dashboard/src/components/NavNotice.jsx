import React from 'react'

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                You have 4 notifications
                <a href='#'>
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        View all
                    </span>
                </a>
            </li>
            <li>
               <hr className='dropdown-divider'/> 
            </li>
            <li className='notification-item '>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum ushdfiu gsyg gh thaggfa</p>
                    <p>30min ago</p>

                </div>

            </li>
            <li>
               <hr className='dropdown-divider'/> 
            </li>
            <li className='notification-item '>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>alo fofa hry</h4>
                    <p>eh el deya m3aky 3amla eh </p>
                    <p>1 hr. ago</p>
                </div>
            </li>
            <li>
               <hr className='dropdown-divider'/> 
            </li>  

            <li className='notification-item '>
                <i className='bi bi-check-circle text-success'></i>
                <div>
                    <h4>akly fouad</h4>
                    <p>akly fouad 3shan haftan w mtl3 myteen omy</p>
                    <p>2 hr. ago</p>
                </div>
            </li>

            <li>
               <hr className='dropdown-divider'/> 
            </li>

            <li className='dropdown-footer'>
                <a href='#' >Show all notifications</a>
            </li>




        </ul>

    </li>
  );
}

export default NavNotice