import React from 'react';
import './Home.css';
import Distance from '../Distance/Distance'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
const Home = () =>{


    return(
      <>
            <section className="background">
             <div className="container mt-2">
            <div className="row">
                <div className="col-md-6">
                   <h1 className="card-heading">Best Distance Education <br/>in Bangalore</h1>
                   <h2 className="card-subheading">Keep your studies on track with Distance Education</h2>
                  <div className="social">
                  <i className="fab fa-instagram  m-2 text-white fa-2x" ></i>
                   <i className="fab fa-facebook m-2 text-white fa-2x"></i>
                   <i className="fab fa-linkedin m-2 text-white fa-2x"></i>
                   <i className="fab fa-twitter m-2 text-white fa-2x"></i>
                  </div>
                </div>
                <div className="col-md-4 mt-5 contact-form">
                <div className="card " >
                        <div className="card-body">
                        <p className="contact-form-header text-primary"  style={{fontWeight:'bold'}}>Get a callback from an Education Counsellor</p>
                        <p>Ask an experienced education counsellor to shortlist a program</p>
                        <div className="form-group m-1 mb-3">
                          <input type="text" 
                          className="form-control"
                          placeholder="Enter Your Name"
                          />
                        </div>
                        <div className="form-group m-1 mb-3">
                            <input type="text"
                            className="form-control"
                            placeholder="Mobile No."/>
                        </div>
                        <div className="form-group m-1 mb-3">
                            <select className="form-control">
                                <option>Choose Course</option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className="form-group m-1 ">
                            <textarea className="form-control" placeholder="Message"></textarea>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">
                                Enquire Now
                            </button>
                        </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
       <div>
       <Services/>
       
       </div>
        
       <div>
       <Distance/>
       </div>
       <Footer/>

      </>
    )

}
export default Home;