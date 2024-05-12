import React ,{useState,useEffect} from 'react';
import './backtotop.css';

function BackToTop() {
    const[scroll,setScroll] = useState(0);

    //setScroll changes whenever the scroll or the y axis changes
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScroll(window.scrollY);
        });
        return()=>{
            window.removeEventListener('scroll',()=>{
                setScroll(window.scrollY);
            });
        };
    },[scroll]);

    const backtotop=()=>{
        window.scrollTo(0,0);
    };

  return (
    <a
     onClick={backtotop}
     className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : undefined}`}
    >
        <i className='bi bi-arrow-up-short iconnn'></i>

    </a>
  )
}

export default BackToTop