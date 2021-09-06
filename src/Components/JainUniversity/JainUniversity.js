import React,{useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
const JainUniversity = () => {


    const[dataitem,updateData] = useState([]);
    const getData = () =>{
        const url ="https://distance-api-url.herokuapp.com/applicationform/getjainuniversity";
        fetch(url)
        .then(response => response.json())
        .then(result => updateData(result))
    }

    useEffect(()=>{
     getData()
    },[])
    
    return(
        <>
        <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <link rel="canonical" href="https://www.eduprov.in/jainuniversity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Jain University Admission in Bangalore - Eduprov</title>
        <meta name="description" content=" Unconventional thinking, global perspective, student diversity, vibrant community ethos is what makes JAIN (Deemed-to-be University) stands above the curve pan India. Over three decades, we place academic commitment and career achievement at the heart of our vision and mission. Enriched by culturally and geographically diverse faculty and professional experts, we are able to produce agents who have inspired a wide range of audience internationally." />
        <meta name="keywords" content="" />
        <meta name="author" content="thephotogenicbug"/>
        </Helmet>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                     <h1 className="text-primary">Jain University</h1>
                     <p className="text-justify mt-2">
                     Unconventional thinking, global perspective, student diversity, vibrant community ethos is what makes JAIN (Deemed-to-be University) stands above the curve pan India. Over three decades, we place academic commitment and career achievement at the heart of our vision and mission. Enriched by culturally and geographically diverse faculty and professional experts, we are able to produce agents who have inspired a wide range of audience internationally.
                     </p>
                     <p className="text-justify">
                     Besides career development, we also develop individuals professionally to think on their feet and challenge complex questions through entrepreneurial engagement. With a wide network capability, JAIN (Deemed-to-be University) stands tall and competent addressing grand questions through its innovative history without compromising on grassroot solutions and standards.
                     </p>
                     <p className="text-justify">
                     With five thriving campuses spread across the city, it has notched success across fields from academics to athletics, world university rankings to international recognitions.
                     </p>
                     <label className="label-title">Our Vision</label>
                     <p>
                     To foster human development through excellence in Quality Education, Research and Entrepreneurial Development.
                     </p>
                     <label className="label-title">Our Mission</label>
                     <ul>
                         <li>To provide quality education, creating human Assets / Manpower and Intellectual capital.</li>
                         <li>To enhance research and development in different disciplines.</li>
                         <li>To develop new generation entrepreneurs who will be instrumental in fuelling economic growth.</li>
                         <li>To create able Leaders, Managers and Technocrats.</li>
                         <li>To foster an ethical environment founded on human values in which both spirit and skill will thrive to enrich the quality of life.</li>
                     </ul>

                </div>
            </div>
             <div className="row">
                  <div className="col-md-12 text-center text-primary">
                  <h2>Jain University Structure</h2>
                  </div>
                   <div className="col-md-12">
                       <table className="table table-sm table-bordered text-center">
                           <thead>
                               <tr>
                                   <th>Program</th>
                                   <th>Duration</th>
                                   <th>1st year Fee</th>
                                   <th>2nd year fee</th>
                                   <th>3rd year fee</th>
                                   <th>Theory Fee</th>
                                   <th>Practical Fee</th>
                                   <th>Registration Fee</th>
                                   <th>Certificate Fee</th>
                                   <th>1st Semester</th>
                                   <th>2nd Semester</th>
                                   <th>3rd Semester</th>
                                   <th>4th Semester</th>
                                   <th>Total Fee</th>
                               </tr>
                           </thead>
                           <tbody>
                           
                           {
                             dataitem.map((xdata, index)=>{
                                 return(
                                     <tr key={index}>
                                       <td>{xdata.program}</td>
                                       <td>{xdata.duration}</td>
                                       <td>{xdata.yearone}</td>
                                       <td>{xdata.yeartwo}</td>
                                       <td>{xdata.yearthree}</td>
                                       <td>{xdata.theoryfee}</td>
                                       <td>{xdata.practicalfee}</td>
                                       <td>{xdata.registrationfee}</td>
                                       <td>{xdata.certificatefee}</td>
                                       <td>{xdata.semone}</td>
                                       <td>{xdata.semtwo}</td>
                                       <td>{xdata.semthree}</td>
                                       <td>{xdata.semfour}</td>
                                       <td>{xdata.totalfee}</td>
                                     </tr>
                                 )
                             })
                         }
                         </tbody>
                       </table>
                   </div>
             </div>
        </div>
        </>
    )

}
export default JainUniversity