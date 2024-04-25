import React from "react";
import "./css/page.css";
function Page(){
    return(
        <div>
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link pnum" href="#">1</a></li>
    <li class="page-item"><a class="page-link pnum" href="#">2</a></li>
    <li class="page-item"><a class="page-link pnum" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        </div>
    )
} 
export default Page