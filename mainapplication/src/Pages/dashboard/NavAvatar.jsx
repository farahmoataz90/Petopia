import React from 'react'

function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
    <a  href='#' data-bs-toggle='dropdown'>
        {/* <img src={profileImg} alt='Profile' className='rounded-circle' /> */}
        <button type="button" className="icon-button2">
                <span className="icon2-badge"></span>
        </button>
        {/* <span className='d-none d-md-block dropdown-toggle ps-2'>F. David</span> */}
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-meenu-arrow profile'>
        <li className='dropdown-header'>
            <h6>David</h6>
            <span>Web developer</span>
        </li>
        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li>
            <a className='dropdown-item d-flex  align-items-center' href='users_profile.html'>
            <i className='bi bi-person'></i>
            <span>My Profile</span>

            </a>
        </li>
        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li>
            <a className='dropdown-item d-flex align-items-center' href='user-profile.html'>
                <i className='bi bi-gear'></i>
                <span>Account settings</span>

            </a>
        </li>
        {/* <li>
            <hr className='dropdown-divider'/>
        </li> */}
        {/* <li>
            <a className='dropdown-item d-flex align-items-center' href='pages-faq.html'>
                <i className='bi bi-question-circle'></i>
                <span>Need Help?</span>

            </a>
        </li> */}
        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li>
            <a className='dropdown-item d-flex align-items-center' href='pages-faq.html'>
                <i className='bi bi-box-arrow-right'></i>
                <span>Sign out</span>

            </a>
        </li>

    </ul>




</li>
  )
}

export default NavAvatar