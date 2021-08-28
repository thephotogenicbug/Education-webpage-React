import React from 'react';
import Registration from '../assets/registration.png'
import Office from '../assets/office.png'
import Student from '../assets/student.png'
import './Admission.css'
const Admission = () =>{


    return(
        <section className="mt-5 admission-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-3 text-center">
                        <h4 className="text-white"style={{fontWeight:'bold'}}>Admission Process</h4>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-3 mt-3 ">
                     <img src={Registration} className="icons"/><div class="icon"><div class="arrow"></div></div>
                     <label className="label">Register Online</label>
                    </div>
                    <div className="col-md-3 mt-3">
                    <img src={Office} className="icons"/><div class="icon"><div class="arrow"></div></div>
                    <label className="label">Walkin to our Branch</label>
                    </div>
                    <div className="col-md-3 mt-3">
                    <img src={Student} className="icons"/>
                    <label className="label">Get Admission</label>
                    </div>
                    <div className="col-md-1"></div>
                    
                </div>
            </div>
        </section>
    )

}
export default Admission;