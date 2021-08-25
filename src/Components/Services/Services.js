import React,{Component} from 'react';
import './Service.css'
import {Link} from 'react-router-dom'
class Services extends Component{


    render(){
        return(
          <section >
           <div className="container">
               <div className="row">
                   <div className="col-md-12 text-center mb-4">
                       <h3 style={{fontWeight:'bold', color:'#496CBE'}}>Universities</h3>
                   </div>
                   <div className="col-md-4">
                       <div className="card text-center card-design-university">
                           <div className="card-body card-design-services">
                            <h5>Annamalai University</h5>
                           </div>
                            <div className="mb-4">
                            <Link to='/annamalaiuniversity' className="btn ">Details</Link>
                            </div>
                       </div>
                   </div>
                   <div className="col-md-4">
                   <div className="card text-center card-design-university">
                           <div className="card-body  card-design-services">
                           <h5>Jain University</h5>
                           </div>
                           <div className="mb-4">
                            <Link to='/jainuniversity' className="btn ">Details</Link>
                            </div>
                       </div>
                   </div>
                   <div className="col-md-4">
               
                   <div className="card text-center card-design-university">
                           <div className="card-body  card-design-services">
                              
                           <h5>Singhania University</h5>
                           <p>
                               
                           </p>
                            
                           </div>
                           <div className="mb-4">
                            <Link to='/singhaniauniversity' className="btn ">Details</Link>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
          </section>
        )
    }

}
export default Services
