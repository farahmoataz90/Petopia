import React from 'react';
import './pagetitle.css';

function PageTitle() {
  return (
    <div className="pagetitle bg-transparent">
        <h1>Dashboard</h1>
    <nav className='bg-transparent shadow-none'>
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <a href="/">
                    <i className="bi bi-house-door"></i>
                </a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
        </ol>
    </nav>
</div>
  )  
}

export default PageTitle