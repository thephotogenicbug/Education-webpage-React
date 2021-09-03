import React,{Component} from 'react';
class JainUniversity extends Component{

    render(){
        return(
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
                      <h2>UG Programs</h2>
                      </div>
                       <div className="col-md-12">
                           <table className="table table-sm table-bordered text-center">
                               <thead>
                                   <tr>
                                       <th>Program</th>
                                       <th>Duration</th>
                                       <th>Year 1 Course Fee</th>
                                       <th>Year 2 Course Fee</th>
                                       <th>Year 3 Course Fee</th>
                                       <th>Theory Fee</th>
                                       <th>Pracitial Fee</th>
                                       <th>Registration Fee</th>
                                       <th>Certificate Fee</th>
                                       <th>Total Fee</th>
                                   </tr>
                               </thead>
                           </table>
                       </div>
                 </div>
                 <div className="row">
                     <div className="col-md-12 text-center text-primary">
                         <h3>PG Programs</h3>
                     </div>
                     <div className="col-md-12">
                         <table className="table table-sm table-bordered text-center">
                             <thead>
                                 <tr>
                                       <th>Program</th>
                                       <th>Duration</th>
                                       <th>Year 1 / Sem 1</th>
                                       <th>Year 2 / Sem 2</th>
                                       <th>Year 3 / Sem 3</th>
                                       <th>Sem 4</th>
                                       <th>Theory Fee</th>
                                       <th>Pracitial Fee</th>
                                       <th>Registration Fee</th>
                                       <th>Certificate Fee</th>
                                       <th>Total Fee</th>
                                 </tr>
                             </thead>
                         </table>
                     </div>
                 </div>
            </div>
        )
    }

}
export default JainUniversity