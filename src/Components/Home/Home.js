import React from 'react';
import './Home.css';
import Distance from '../Distance/Distance'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import {Helmet} from 'react-helmet'
import Shape from '../assets/shape.png'
const Home = () =>{


    return(
      <>
       <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <link rel="canonical" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Best Distance Education in Bangalore - Eduprov</title>
        <meta name="description" content="Best Distance Education in Bangalore Distance education can be defined as the education of students that does not necessitate the physical presence of students at the place viz. school. It is also termed as distance learning. " />
        <meta name="keywords" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:url" content="#" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="#" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eduprov" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="#" />
        <meta name="twitter:url" content="https://twitter.com/eduprov" />
        <link rel="shortcut icon" type="image/png" href="#"  alt="#" title="#"  />
        <link rel="apple-touch-icon" href="#"  alt="" title="#" />
        <meta name="author" content="thephotogenicbug"/>
        </Helmet>
        <section className="background">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6">
                         <h1 className="heading">Best Distance Education in Bangalore</h1>
                          <img src={Shape} className="shape"/>
                         <h2 className="sub-heading">Keep your studies on track <br/>with Distance Education</h2>
                     </div>
                     <div className="col-md-4 contact-form">
                         <div className="card">
                             <div className="card-body">
                            
                            <p className="paragraph">Get a callback from an Education <br/> Counsellor</p>
                            <label className="card-label">Ask an experienced education counsellor to shortlist a program</label>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Mobile No" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Course" />
                                </div>
                                <div className="form-group">
                                   <textarea className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div >
                                   <button className="btn">
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
       <Distance/>
        </div>
        <div>
        </div>

      </>
    )

}
export default Home;