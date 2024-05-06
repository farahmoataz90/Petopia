import React from 'react'
import './pageno.css'

function Pageno() {
  return (
    <div>
    <nav aria-label="Page navigation example">
<ul className="pagination">
<li className="page-item">
<a className="page-link" href="#" aria-label="Previous">
<h5> <span aria-hidden="true">&laquo;</span></h5>
</a>
</li>
<li className="page-item"><a className="page-link pnum" href="#"><h5> 1</h5></a></li>
<li className="page-item"><a className="page-link pnum" href="#"><h5> 2</h5></a></li>
<li className="page-item"><a className="page-link pnum" href="#"><h5> 3</h5></a></li>
<li className="page-item">
<a className="page-link" href="#" aria-label="Next">
<h5> <span aria-hidden="true">&raquo;</span></h5> 
</a>
</li>
</ul>
</nav>
</div>
  )
}

export default Pageno