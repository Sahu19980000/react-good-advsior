import Link from 'next/link'
import React from 'react'

const Megamenu = () => {
  return (
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Business Setup</a>
    <ul class="dropdown-menu dp-header-menu">
      <li><Link class="dropdown-item" href="/business-registration" >Business Registration</Link></li>
      <li class="nav-item dropend">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         International Business Setup
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Service Name</a></li>
          <li><a class="dropdown-item" href="#">Service Name</a></li>                      
          <li><a class="dropdown-item" href="#">Service Name</a></li>                      
          <li><a class="dropdown-item" href="#">Service Name</a></li>
        </ul>
      </li>    
      <li class="nav-item dropend">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Company Name Search
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Service Name</a></li>
          <li><a class="dropdown-item" href="#">Service Name</a></li>                      
          <li><a class="dropdown-item" href="#">Service Name</a></li>                      
          <li><a class="dropdown-item" href="#">Service Name</a></li>
        </ul>
      </li>                       
      <li>
        <a class="dropdown-item" href="#">Licence & Registration</a></li>
    </ul>
  </li>
  )
}

export default Megamenu
