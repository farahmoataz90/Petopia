import React from 'react';
import './content.css';
import PageTitle from './PageTitle';
import Dashboard from './Dashboard';

function DashContent() {
  return (
    <main id='main' className='main'>
        <PageTitle />
        <Dashboard />
    </main>
  )
}

export default DashContent