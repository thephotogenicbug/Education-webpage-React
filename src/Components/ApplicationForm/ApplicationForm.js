import React,{useState} from 'react';
import axios from 'axios';

const ApplicationForm = () =>{

    const[message,updateMessage] = useState("");

    const[name, pickName] = useState("");
    const[email,pickEmail] = useState("");
    const[mobile,pickMobile] = useState("");
    const[fname,pickFName] = useState("");
    const[mname,pickMName] = useState("");
    const[dob,pickDob] = useState("");
    const[exam,pickExam] = useState("");
    const[university,pickUniversity] = useState("");
    const[college,pickCollege] = useState("");
    const[passing,pickPassing] = useState("");
    const[percentage,pickPercentage] = useState("");
    const[gender,pickGender] = useState("");
    const[address,pickAddress] = useState("");

    const save = () =>{
        var url ="http://localhost:5000/applicationform/newform";
        var data ={"name":name, "email":email, "mobile":mobile, "fname":fname, "mname":mname, "dob":dob, "exam":exam, "university":university, "college":college, "passing":passing, "percentage":percentage, "gender":gender, "address":address}
        axios.post(url, data)
        .then(response =>{
            updateMessage(response.data);
            pickName("");
            pickEmail("");
            pickMobile("");
            pickFName("");
            pickMName("");
            pickDob("");
            pickExam("");
            pickUniversity("");
            pickCollege("");
            pickPassing("");
            pickPercentage("");
            pickGender("");
            pickAddress("");
        })
    }


    return(
        <div className="container mt-5 pt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                         <div className="card-header bg-primary text-white">Application Form</div>
                         <p className="text-success text-center">{message}</p>
                        <div className="card-body">
                           <div className="row">
                                <div className="col-md-4">
                                <div className="form-group mb-4">
                                   <label>Name</label>
                                   <input type="text" 
                                   className="form-control"
                                   value={name}
                                   onChange={obj=>pickName(obj.target.value)}
                                   />
                               </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-4">
                                   <label>Email</label>
                                   <input type="text" 
                                   className="form-control"
                                   value={email}
                                   onChange={obj=>pickEmail(obj.target.value)}
                                   />
                               </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-4">
                                   <label>Mobile No</label>
                                   <input type="text" 
                                   className="form-control"
                                   value={mobile}
                                   onChange={obj=>pickMobile(obj.target.value)}
                                   />
                               </div>
                                </div>
                           </div>
                           <div className="row">
                                <div className="col-md-4">
                                <div className="form-group mb-4">
                                   <label>Father Name</label>
                                   <input type="text" 
                                   className="form-control"
                                   value={fname}
                                   onChange={obj=>pickFName(obj.target.value)}
                                   />
                               </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-4">
                                   <label>Mother Name</label>
                                   <input type="text" 
                                   className="form-control"
                                   value={mname}
                                   onChange={obj=>pickMName(obj.target.value)}
                                   />
                               </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-4">
                                   <label>Date of Birth</label>
                                   <input type="date" 
                                   className="form-control"
                                   value={dob}
                                   onChange={obj=>pickDob(obj.target.value)}
                                   />
                               </div>
                                </div>
                           </div>
                            <div className="row">
                                <div className="col-md-4">
                                   <div className="form-group mb-4">
                                   <label>Name of Exam</label>
                                    <input type="text" 
                                    className="form-control"
                                    value={exam}
                                    onChange={obj=>pickExam(obj.target.value)}
                                    />
                                   </div>
                                </div>
                                <div className="col-md-4">
                                   <div className="form-group mb-4">
                                   <label>Name of University / Board</label>
                                    <input type="text" 
                                    className="form-control"
                                    value={university}
                                    onChange={obj=>pickUniversity(obj.target.value)}
                                    />
                                   </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-4">
                                    <label>Name of School / College</label>
                                    <input type="text" 
                                    className="form-control"
                                    value={college}
                                    onChange={obj=>pickCollege(obj.target.value)}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group mb-4">
                                    <label>Year of Passing</label>
                                    <input type="text" 
                                    className="form-control"
                                    value={passing}
                                    onChange={obj=>pickPassing(obj.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-4">
                                    <label>Percentage</label>
                                    <input type="text" 
                                    className="form-control"
                                    value={percentage}
                                    onChange={obj=>pickPercentage(obj.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-4">
                                    <label>Gender</label>
                                     <select className="form-control" value={gender} onChange={obj=>pickGender(obj.target.value)}>
                                         <option>Choose..</option>
                                         <option>Male</option>
                                         <option>Female</option>
                                     </select>
                                    </div>
                                </div>
                            </div>
                           <div className="row">
                               <div className="col-md-12">
                                   <div className="form-group">
                                   <label>Address</label>
                                   <textarea 
                                   className="form-control" 
                                   rows="4"
                                   value={address}
                                   onChange={obj=>pickAddress(obj.target.value)}
                                   >

                                   </textarea>
                                   </div>
                               </div>
                           </div>
                           <div className="row">
                               <div className="form-group">
                                   <button className="btn btn-primary" onClick={save}>
                                       Submit
                                    </button>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 pt-5"></div>
        </div>
    )

}
export default ApplicationForm