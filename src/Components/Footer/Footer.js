import React from 'react'

const Footer = () => {


  return(
    <footer class="bg-light text-center text-lg-start mt-4">
  <div class="container p-4">

    <div class="row">

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase" style={{fontWeight:'bold'}}>Head Office</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark">
       <i className="fa fa-map-pin"></i>     No 20 2nd Floor Lady Curzon Rd Santha Complex Shivaji Nagar Bengaluru Karnataka 560001
            </a>
          </li>
          <li className="mt-2">
            <a href="#!" class="text-dark">
          <i className="fa fa-envelope"></i>  admin@eduprov.com
            </a>
          </li>
          <li className="mt-2">
            <a href="#!" class="text-dark">
        <i className="fa fa-phone"></i>  +91 80 25591146
            </a>
          </li>
        </ul>
      </div>
    
      <div class="col-lg-9 col-md-6 mb-4 mb-md-0 mt-5">
      <section class="">
      <form action="">
  
        <div class="row d-flex justify-content-center">
  
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
        
          <div class="col-md-5 col-12">
        
            <div class="form-outline mb-4">
              <input type="email" id="form5Example2" class="form-control" placeholder="Email address" />
            </div>
          </div>
       
          <div class="col-auto">
          
            <button type="submit" class="btn btn-primary mb-4">
              Subscribe
            </button>
          </div>
       
        </div>
      
      </form>
    </section>
      </div>
  
   
   
  

    </div>
    

  </div>

  <div class="text-center p-3"  style={{background:'rgba(0, 0, 0, 0.2)'}}>
   Eduprov Educational Institute © 2021 Copyright:
    <a class="text-dark" href="https://www.thephotogenicbug.in/"> thephotogenicbug</a>
  </div>

</footer>
  )

}
export default Footer