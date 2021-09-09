import React,{useState, useEffect} from 'react';
import './AnnamaliUniverity.css'
import {Helmet} from 'react-helmet'
const AnnamalaiUniversity = () =>{

    const[dataitem,updateData] = useState([]);
    const getData = () =>{
        const url ="https://distance-api-url.herokuapp.com/applicationform/getannamalaiuniversity";
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
        <link rel="canonical" href="https://www.eduprov.in/annamalaiuniversity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Annamalai University Admission in Bangalore - Eduprov</title>
        <meta name="description" content=" Annamalai University, accredited with ‘A’ Grade by NAAC in 2014, is one of India’s largest public residential universities with 10 Faculties and 49 departments of study. Sprawling over 950 Acres of land, the University does yeoman service in taking education to the doorsteps of the people who are otherwise far from access to centres of higher learning. The University has initiated several innovative teaching programmes over the years and has been a pioneer in distance education." />
        <meta name="keywords" content="" />
        <meta name="author" content="thephotogenicbug"/>
        </Helmet>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                     <h1 className="text-primary">Annamalai University</h1>
                     <p className="text-justify">
                      <b>Annamalai University</b>, accredited with ‘A’ Grade by NAAC in 2014, is one of India’s largest public residential universities with 10 Faculties and 49 departments of study. Sprawling over 950 Acres of land, the University does yeoman service in taking education to the doorsteps of the people who are otherwise far from access to centres of higher learning. The University has initiated several innovative teaching programmes over the years and has been a pioneer in distance education.
                     </p>
                     <label className="label-title">Annamalai University Act 2013</label>
                     <p className="text-justify">
                     The most significant development is the enactment of the Annamalai University Act, 2013 (Tamil Nadu Act 20 of 2013), which has come into force from September 25, 2013, after obtaining the assent of His Excellency, the President of India.
                     </p>
                     <label className="label-title">Accolades</label>
                     <p className="text-justify">
                      <b>“The NIRF-2020”</b> by the Ministry of Human Resource Development (MHRD) has ranked the University in the band 101 - 150 in the University Category. In the Pharmacy Category the ranking is 12th in India. In the Medical Category the ranking is 35th.
                     </p>
                     <p className="text-justify">
                     “The Times Higher Education World University Ranking - 2021” has ranked Annamalai University in 1000+ for Overall category. In the Subject Category Ranking, 2021, the University is ranked 601+ for Clinical & Health Subjects, in the band of 801 - 1000 for Engineering, 801+ for Life Sciences and 1000+ in the Physical Sciences Subjects.
                     </p>
                     <p className="text-justify">
                     “The  QS World University Ranking - 2021” has ranked Annamalai University in the band of 301 - 350 in Asia Ranking.
                     </p>
                     <p className="text-justify">
                     "The CWTS Leiden Ranking 2019", on scientific impact of universities and on universities' involvement in scientific collaboration & scientific performance, has ranked the University at 23rd based on the number of publications and 7th based on the proportion of publications that, compared with other publications in the same field and in the same year, belong to the top 10% most frequently cited.
                     </p>
                     <p className="text-justify">
                     “The SCImago Institutional Ranking” (2019) has ranked 9th in Tamil Nadu and 29th among the top 212 ranked institutions for Higher Education in India.
                     </p>
                     <p className="text-justify">
                     International Comparative Performance of India's Research Base (2009-14), a report published by Elsevier in April, 2016, prepared in collaboration with the Department of Science and Technology, Ministry of Science, Government of India has rated the University as the top Indian Institute in Pharmacology, 17th among the top 30 Indian Universities in Publications with highest subject area Publication Count in Pharmacology.
                     </p>
                     <p className="text-justify">
                     As far as the Global Exposure, Indian Science Ascending, a Springer Nature report, done in conjunction with Confederation of Indian Industries, has ranked the University as 11th among the top 20 Indian Institutions in International Collaborations.
                     </p>
                     <p className="text-justify">
                     The University has participated in the Southern (Antarctic) Ocean Expeditions (SOE) organized by National Centre for Antarctic Ocean Research 2011 - 12 onwards.
                     </p>
                     <label className="label-title">Research & Partnership</label>
                     <p className="text-justify">
                     Annamalai University has a commendable track record in projects and publications and has been awarded the PURSE Programme by the Department of Science and Technology. Ten departments are supported by UGC-SAP, Ten by DST-FIST and two departments have attained the status of Centre of Advanced Study. Annamalai University has joint research and innovation partnerships with 24 institutions across the USA, Europe, Australia, Japan, and the UK. The list of partners includes prestigious institutes like Karolinska Institute, John Hopkins University, and University of Michigan amongst others.
                     </p>
                     <p className="text-justify">
                     Two of the most notable international collaborations in which Annamalai University is the Co-ordinating Institute include the Indo- EU FUNCFOOD Project and the 21st Century Indo-US Knowledge Initiative. There are several ongoing research projects with international foundations and industrial players like Bayer, CavinKare, Dow Agrosciences, Bill & Melinda Gates Foundation, HCL, L&T, Accenture, and Huawei.
                     </p>
                     <label className="label-title">MoUs & Patents</label>
                     <p className="text-justify">
                     To its credit, The University has obtained 15 Patents and has 40 MoUs with research partners like FAO, IRRI and USDA.
                     </p>
                     <label className="label-title">Institutional Social Responsibility Activities</label>
                     <p className="text-justify">
                     The ISR activities of the University include, Hospital on Wheels, Free Medical and Dental Camps in Villages, Lifestyle & Hygiene Awareness, Rural & Urban Health Centres through the Faculty of Medicine and Dentistry which is attached with a 1400 bedded hospital. The Faculty of Agriculture carries out extension activities like Agripreneurship Development Programme, Sustainable Livelihood Projects for Tsunami affected people and Training Farmers in Integrated Farming.
                     </p>

                </div>
            </div>
            <div className="row">
               <div className="col-md-12 text-center text-primary">
                   <h2>Available Courses</h2>
               </div>
                 <div className="col-md-3"></div>
                 <div className="col-md-6">
                 <table className="table table-sm table-bordered  text-center">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Course Name</th>
                                <th>Specialization</th>
                            </tr>
                        </thead>
                         <tbody>
                         {
                             dataitem.map((xdata, index)=>{
                                 return(
                                     <tr key={index}>
                                       <td>{xdata.course}</td>
                                       <td>{xdata.specz}</td>
                                     </tr>
                                 )
                             })
                         }
                         </tbody>
                    </table>
                 </div>
                 <div className="col-md-3"></div>
            </div>
        </div>
        </>
    )
}
export default AnnamalaiUniversity