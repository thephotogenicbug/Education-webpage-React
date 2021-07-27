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
                            <label>Annamalai University</label>
                           </div>
                            <div className="mb-4">
                            <Link to='/' className="btn ">Read More</Link>
                            </div>
                       </div>
                   </div>
                   <div className="col-md-4">
                   <div className="card text-center card-design-university">
                           <div className="card-body  card-design-services">
                           <label>Jain University</label>
                           </div>
                           <div className="mb-4">
                            <Link to='/' className="btn ">Read More</Link>
                            </div>
                       </div>
                   </div>
                   <div className="col-md-4">
               
                   <div className="card text-center card-design-university">
                           <div className="card-body  card-design-services">
                              
                           <label>Singhania University</label>
                           </div>
                           <div className="mb-4">
                            <Link to='/' className="btn ">Read More</Link>
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
