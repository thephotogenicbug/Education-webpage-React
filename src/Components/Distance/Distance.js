import React,{Component} from 'react'
import './Distance.css'
import Cycle from '../assets/video-call.svg'
class Distance extends Component{


    render(){
        return(
            <div className="container-fluid mb-3">
            <div className="row">
             <div className="col-md-6 left-container">
                <div className="card distance-card">
                    <div className="card-body text-center">
                    <h2 className="card-heading ">Distance Education</h2>
                    <label className="card-subheading ">remote way of learning</label>
                    </div>
                </div>
             </div>        
             <div className="col-md-6 right-container">
     
              <p className="text-white text-justify right-content">
              Best Distance Education in Bangalore Distance education can be defined as the education of students that does not necessitate the physical presence of students at the place viz. school. It is also termed as distance learning. It is a remote way of learning that does not require face-to-face interaction with the instructor. At an undergraduate level, distance learning usually means students engaging with learning materials at home or work. These materials are produced by the university, college or learning provider and are either sent directly to the student or more usually today accessed via the internet.
              </p> 
              <p className="text-white text-justify" style={{fontWeight:'bold'}}>
              What are the cons of distance education? Every coin has two faces. So does distance learning have? It cannot be said as a straightforward disadvantage, but it depends upon how the negligence of any student can prove distance education as disadvantageous to him. Some are: It requires self-motivation, it is isolated, does not give direct access to the instructor, it must be accredited, it does not allow students to work on their oral communication skills. But with the multi-purpose, evolving of people and their dire desire to achieve so much in so little time, people are running short of time and need to opt for distance education to propel their future. So, it can be seen a blessing in disguise.
              </p> 
             </div>        
            </div>
          </div>
        )
    }
}
export default Distance
