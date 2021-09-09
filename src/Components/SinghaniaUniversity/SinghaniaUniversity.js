import React,{useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
const SinghaniaUniversity = () =>{

    const[dataitem, updateData] = useState([]);
    const getData = () =>{
        const url = "https://distance-api-url.herokuapp.com/applicationform/getsinghaniauniversity";
        fetch(url)
        .then(response => response.json())
        .then(result => updateData(result))
    }

    useEffect(()=>{
       getData();
    },[])


  
        return(
            <>
             <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <link rel="canonical" href="https://www.eduprov.in/singhaniauniversity" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Singhania University Admission in Bangalore - Eduprov</title>
                <meta name="description" content="Singhania University came in existence by the inspirations of Smt. Narmada Devi Singhanaia, mother of the founder Shri. D.C. Singhania." />
                <meta name="keywords" content="" />
                <meta name="author" content="thephotogenicbug"/>
            </Helmet>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className=" text-primary">Singhania University</h1>
                        <p className="text-justify mt-3">
                        The University has been established by the Govt. of Rajasthan, under Ordinance 6 of 2007. It is a <b>UGC recognized university as per Sec. 2f of the UGC Act 1956.</b>
                        </p>
                        <p className="text-justify">
                         <b>Singhania University</b> is situated at Pacheri Bari, Distt. Jhunjhunu (Rajasthan) on the Delhi-Narnaul Singhana - Pilani Road. It is about 160 kms. west of Delhi and about 165 kms. north of Jaipur. The University can be reached either by rail or by road. The nearest railway stations are Narnaul (19 kms.) and Chirawa (45 kms.)
                        </p>
                        <p className="text-justify">
                        The campus that covers an area of about 30 acres of land is picturesque and away from the din of the metropolis. The serenity of the hill locks all around endow the campus with an ideal environment for education and research.
                        </p>
                        <p className="text-justify">
                        Singhania University came in existence by the inspirations of Smt. Narmada Devi Singhanaia, mother of the founder Shri. D.C. Singhania.
                        </p>
                        <p className="text-justify">
                        Singhania University was inaugurated on 21st Oct 2007 by a great visionary and a philanthropist, Shri D.C. Singhania to impart quality education of world class standards, reflecting the latest advances in the field of education and research with state-of-the-art academic and administrative infrastructure. The University has a well stocked and furnished library, well equipped labs, a host of indoor and outdoor games and sports, majestic hostels separate for boys and girls, well-furnished cottages for faculty, wide open spaces, lush green lawns, colourful flowerbeds and well kept orchards in sylvan surroundings.
                        </p>
                        <p className="text-justify">
                        Singhania University offers world-class infrastructure, highly qualified and dedicated faculties and excellent environment for academic and intellectual growth.
                        </p>
                        <p className="text-justify">
                        The University focuses on comprehensive growth of the students, working on their hearts and minds by addressing to their academic, cultural, physical and social needs in an environment of continuous interaction and growth, conducive for the enrichment of mind and body. The faculty is fully committed to impart quality education by investing all its skills and knowledge. The University endeavours not only to produce excellent academic results but also to produce excellent and successful professionals.
                       </p>
                       <p className="text-justify">
                       Special emphasis is laid on communication skills and personality development. The uniqueness of our curriculum and various programmes, lies in promoting a strong passion in the students - for all round excellence with perfection; for meeting the challenges head on with due emphasis on ethical and moral values through broad -based management skills. The University produces knowledgeable young citizens capable of creating a better and prosperous India through inter-cultural understanding and respect.
                       </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 text-center text-primary">
                        <h2>Singhania University Structure</h2>
                    </div>
                    <div className="col-md-12">
                        <table className="table table-sm table-bordered text-center ">
                            <thead className="bg-primary text-white">
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Specialization</th>
                                        <th>Eligibility</th>
                                        <th>Course Mode</th>
                                        <th>Duration</th>
                                        <th>Exams</th>
                                        <th>Course Fee</th>
                                        <th>Application</th>
                                        <th>Exam Fee</th>
                                        <th>Total Fee</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                             dataitem.map((xdata, index)=>{
                                 return(
                                     <tr key={index}>
                                       <td>{xdata.course}</td>
                                       <td>{xdata.spec}</td>
                                       <td>{xdata.eligibility}</td>
                                       <td>{xdata.coursemode}</td>
                                       <td>{xdata.duration}</td>
                                       <td>{xdata.exams}</td>
                                       <td>{xdata.coursefee}</td>
                                       <td>{xdata.application}</td>
                                       <td>{xdata.examfee}</td>
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
export default SinghaniaUniversity;