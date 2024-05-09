import React from 'react'

function NavMessage() {
  return (
    <li className="nav-item dropdown">
    <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
           <i className="bi bi-chat-left-text"></i>
           <span className="badge bg-success badge-number">3</span>
    </a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
           <li className="dropdown-header">
               You have 3 new messages
               <a href="#">
                   <span className="badge rounded-pill bg-primary p-2 ms-2">
                       View all
                   </span>
               </a>
           </li>
           <li>
             <hr className="dropdown-divider"/>
           </li>
           <li className='message-item'>
               <a href='#'>
                   <img
                       src='assets/img/messages-1.jpg'
                       alt=''
                       className='rounded-circle'
                   />
                   <div>
                       <h4>Farah Moataz</h4>
                       <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                           consequuntur aspernatur voluptatem repud
                       </p>
                       <p>4 hrs. ago</p>
                   </div>
               </a>
           </li>
           <li>
             <hr className="dropdown-divider"/>
           </li>
           <li className='message-item'>
               <a href='#'>
                   <img 
                     src='assets/img/messages-2.jpg'
                     alt=''
                     className='rounded-circle'
                   />

                   <div>
                       <h4>Fouad Moataz</h4>
                       <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           Molestiae mollitia pariatur eius nostrum itaque veniam officia 
                       </p>
                       <p>6 hrs. ago</p>
                   </div>
               </a>
           </li>
           <li>
             <hr className="dropdown-divider"/>
           </li>
           <li className='dropdown-footer'>
           <a href='#' >Show all notifications</a>
       </li>

       </ul>
</li>
  )
}

export default NavMessage