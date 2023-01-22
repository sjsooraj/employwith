import React from 'react'
import Navbar from './Navbar'

const Empform = () => {
  return (
    
    <div className="container">
        <Navbar/>
        <div className="row ">
            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1"> Name</label>
    <input type="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Designation</label>
    <input type="" class="form-control" id="exampleInputPassword1" placeholder="Designation"/>
  </div>
  <div class="form-group">
    <label htmlFor="" className="form-label"> Location</label>
    <input type="" class="form-control" id="exampleCheck1"placeholder="Location"/>
    <label htmlFor="" className="form-label">Salary</label>
    <input type="" class="form-control" id="exampleCheck1"placeholder="Salary"/>
    
  </div>
  
  <button type="submit" class="yo btn btn-primary">Submit</button>
  
  
</form>
            </div>
        </div>
    </div>
  )
}

export default Empform