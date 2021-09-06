import React,{useState, useEffect} from 'react';
import './Home.css';
import Distance from '../Distance/Distance'
import Services from '../Services/Services'
import Admission from '../Admission/Admission'
import Footer from '../Footer'
import {Helmet} from 'react-helmet'
import Shape from '../assets/shape.png'
import axios from 'axios';
import { useForm } from "react-hook-form";
const Home = () =>{
    const { register, handleSubmit } = useForm();

    const[data, updateData] = useState("");
    const getData = () =>{
        const url = 'https://distance-api-url.herokuapp.com/applicationform';
        fetch(url)
        .then(response => response.json())
        .then(result => updateData(result))
        
    }

    useEffect(()=>{
        getData();
    },[])



    const [message, updateMessage] = useState("");
    const [name, pickName] = useState("");
    const [mobile, pickMobile] = useState("");
    const [course, pickCourse] = useState("");
    const [info, pickInfo] = useState("");

    const save = () =>{
        var url = "https://distance-api-url.herokuapp.com/applicationform/new";
        var data = {"ename":name, "emobile":mobile, "ecourse":course,"einfo":info};
        axios.post(url, data)
        .then(response =>{
            updateMessage(response.data);
            getData("");
            pickName("");
            pickMobile("");
            pickCourse("");
            pickInfo("");
        })
      

    }

   
    return(
      <>
       <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <link rel="canonical" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Best Distance Education in Bangalore - Eduprov</title>
        <meta name="description" content="Distance education is a millennial for students towards a better career in the longer run. Distance education is now reaching heights as many students prefer distance education. For those students who have dropped their education for certain unspecified reasons or planning to work as well as carry forward their studies, distance education can be a very good choice. As Distance education and online education are often used synonymously online distance education post covid has become more approved by many of the students across the world. Online distance education has paved way for several advantages and benefits for completion of education. Students are able to engage in education from a distance, in the comfort of their own space and a self-relaxed pace. Eduprov`s Distance education approach is very holistic and productive for students choosing amongst a pool of variants in colleges considering the factual part of admissions, possibilities and getting in would be a challenging task keeping in mind the business casualties who are in a roar towards economic productivity. " />
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
                         <div className="card card-design">
                             <div className="card-body">
                            
                            <p className="paragraph">Get a callback from an Education <br/> Counsellor</p>
                            <label className="card-label">Ask an experienced education counsellor to shortlist a program</label>
                               <p className="text-primary">{message}</p>
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Name" 
                                    value={name}
                                    {...register("name", { required: true })}
                                    onChange={obj=>pickName(obj.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Mobile No" 
                                    value={mobile}
                                    {...register("mobile", { required: true })}
                                    onChange={obj=>pickMobile(obj.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Course" 
                                    value={course}
                                    {...register("course", { required: true })}
                                    onChange={obj=>pickCourse(obj.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                   <textarea className="form-control" 
                                   placeholder="Message"
                                   value={info}
                                   {...register("info", { required: true })}
                                   onChange={obj=>pickInfo(obj.target.value)}
                                   >
                                   </textarea>
                                </div>
                                <div >
                                   <button className="btn" onClick={handleSubmit(save)}>
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
            <Services/>
        </div>
        <div>
            <Admission/>
        </div>

      </>
    )

}
export default Home;