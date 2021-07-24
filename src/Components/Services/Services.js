import React,{Component} from 'react';
import './Service.css'
class Services extends Component{


    render(){
        return(
            <div className="container mt-5">
             <div className="row">
                <div className="col-md-12 text-center">
                <h3 className="heading">Universities</h3>
                </div>
             </div>
             <div className="row mt-3 text-center">
           
             <div className="col-md-4">
             <div className="card card-1" style={{width:'20rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                    <h5 class="card-title">Annamalai University</h5>
                    <p class="card-text">Annamalai University is one of Asia's largest public residential universities located in Annamalai Nagar</p>
                    <a  class="btn btn-primary">Read More</a>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card card-1" style={{width:'20rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <h5 className="card-title">Jain University</h5>
                    <p className="card-text"> Jain Online seeks to make individuals gain global insights to challenge real-world problems</p>
                    <a  class="btn btn-primary">Read More</a>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card card-1" style={{width:'20rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <h5 className="card-title">Singhania University</h5>
                    <p className="card-text"> Singhania University was founded by the Shri D C Singhania (lawyer) in 2007. The University has been established by the Govt </p>
                    <a  class="btn btn-primary">Read More</a>
                </div>
                </div>
                </div> 
              
             </div>
            </div>
        )
    }

}
export default Services
