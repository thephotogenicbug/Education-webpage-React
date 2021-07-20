import React from 'react';
import './Home.css';
import Hero from '../assets/hero_img.svg'
const Home = () =>{


    return(
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-7">
                    <div className="card ">
                        <div className="card-body">
                           <h1 className="card-heading">Best Distance Education Service <br/> in Bangalore</h1>
                            <h2 className="card-subheading">Keep your studies on track with Distance Education</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                <img src={Hero} className="hero"/>
                </div>
            </div>
        </div>
    )

}
export default Home;