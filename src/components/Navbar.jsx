import React from 'react'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-teritary bg-success ">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav  mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active bg-danger"  aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active bg-white"  aria-current="page" href="/form">Form</a>
          </li>
          
          
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar