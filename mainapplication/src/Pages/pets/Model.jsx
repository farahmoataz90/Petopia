import React from 'react'
import funcat from '../assets/funcat.gif';

function Model(props) {
    let modelStyle ={
        display: 'block',
        backgroundColor:'rgba(0,0,0,0.8)',
        border:'none'
    }
    let contentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '100%',
    };

    let textStyle = {
        color: '#fff', // Text color
        fontSize: '24px',
    };

    let imageStyle = {
        width: '100%',
        height: '100%',
    }
    let closeButtonStyle = {
        color: '#fff', // Close button color
        position: 'absolute',
        top: '5px',
        right: '10px',
        fontSize: '1.5rem',
        zIndex: '1051', // Ensure it's above the modal backdrop
        backgroundColor: 'transparent',
        border: 'none',
    };


  return (
    <div className="modal show fade" style={modelStyle}>
  <div className="modal-dialog modal-dialog-centered" style={contentStyle}>
    <div className="modal-content" style={{ backgroundColor: 'transparent', border: 'none' }}>
      <div className="modal-header border-0">
        <h5 className="modal-title border-0" style={textStyle}>Thank You !</h5>
        <button type="button" className="btn-close" style={closeButtonStyle} onClick={props.hide}></button>
      </div>
      <div className="modal-body img-fluid" style={{ backgroundColor: 'transparent' }}>
        <img src={funcat} alt='fe ota hna haseeeb' className='img-fluid'  style={imageStyle}/>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Model