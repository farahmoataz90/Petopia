import React from "react";
import "./css/fpage.css";
function Fpage(){
    return(
        <div>
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
     <a class="page-link" href="#" aria-label="Previous">
     <h5> <span aria-hidden="true">&laquo;</span></h5>
      </a>
    </li>
    <li class="page-item"><a class="page-link fpnum" href="#"><h5> 1</h5></a></li>
    <li class="page-item"><a class="page-link fpnum" href="#"><h5> 2</h5></a></li>
    <li class="page-item"><a class="page-link fpnum" href="#"><h5> 3</h5></a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
      <h5> <span aria-hidden="true">&raquo;</span></h5> 
      </a>
    </li>
  </ul>
</nav>
        </div>
    )
} 
export default Fpage