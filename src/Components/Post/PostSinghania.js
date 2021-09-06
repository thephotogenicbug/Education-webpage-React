import React,{useState} from 'react';
import axios from 'axios';
const PostSinghania = () =>{

    const[message, updateMessage] = useState("");
    const[course, pickCourse] = useState("");
    const[spec, pickSpec] = useState("");
    const[eligibility, pickEligibility] = useState("");
    const[coursemode, pickCourseMode] = useState("");
    const[duration, pickDuration] = useState("");
    const[exams, pickExam] = useState("");
    const[coursefee, pickCourseFee] = useState("");
    const[application, pickApplication] = useState("");
    const[examfee, pickExamFee] = useState("");
    const[persem, pickPerSem] = useState("");


    const save = () =>{
      var url = "https://distance-api-url.herokuapp.com/applicationform/postsinghania"
      var data ={"course":course, "spec":spec, "eligibility":eligibility, "coursemode":coursemode, "duration":duration, "exams":exams, "coursefee":coursefee, "application":application, "examfee":examfee, "persem":persem};
      axios.post(url, data)
      .then(response =>{
          updateMessage(response.data);
          pickCourse("");
          pickSpec("");
          pickEligibility("");
          pickCourseMode("");
          pickDuration("");
          pickExam("");
          pickCourseFee("");
          pickApplication("");
          pickExamFee("");
          pickPerSem("");
      })
    }



    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Singhania University</div>
                        <div className="card-body">
                            <p className="text-center text-success">{message}</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Course Name</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={course}
                                        onChange={obj=>pickCourse(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Specialization</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={spec}
                                        onChange={obj=>pickSpec(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Eligibility</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={eligibility}
                                        onChange={obj=>pickEligibility(obj.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Course Mode</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={coursemode}
                                        onChange={obj=>pickCourseMode(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Duration</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={duration}
                                        onChange={obj=>pickDuration(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Exams</label>
                                        <input type="text" 
                                        className="form-control"
                                        value={exams} 
                                        onChange={obj=>pickExam(obj.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Course Fee</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={coursefee}
                                        onChange={obj=>pickCourseFee(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Application Fee</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={application}
                                        onChange={obj=>pickApplication(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Exam Fee</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={examfee}
                                        onChange={obj=>pickExamFee(obj.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Per Sem / Year</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={persem}
                                        onChange={obj=>pickPerSem(obj.target.value)}
                                        />
                                    </div>
                                </div> 
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <button className="btn" onClick={save}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="row mt-5 pt-1"></div>
        </div>
    )
}

export default PostSinghania