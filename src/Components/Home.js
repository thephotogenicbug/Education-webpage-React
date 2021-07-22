import React from 'react';
import './Home.css';
import Banner from './assets/Banner.png'
import Services from './Services'
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
                <div className="col-md-5">
                <img src={Banner} className="hero" alt="Girl with books" title="Girl with books"/>
                </div>
            </div>
        </div>
       </section>
        <Services/>
      </>
    )

}
export default Home;