import React,{useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
const PostSinghania = () =>{

    const { register, handleSubmit } = useForm();

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
    const[totalfee, pickTotalfee] = useState("");


    const save = () =>{
      var url = "https://distance-api-url.herokuapp.com/applicationform/postsinghania"
      var data ={"course":course, "spec":spec, "eligibility":eligibility, "coursemode":coursemode, "duration":duration, "exams":exams, "coursefee":coursefee, "application":application, "examfee":examfee, "totalfee":totalfee};
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
          pickTotalfee("")
          updateMessage("")
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
                                        {...register("coursename", { required: true })}
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
                                        {...register("spec", { required: true })}
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
                                        {...register("eligibility", { required: true })}
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
                                        {...register("coursemode", { required: true })}
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
                                        {...register("duration", { required: true })}
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
                                        {...register("exams", { required: true })}
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
                                        {...register("coursefee", { required: true })}
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
                                        {...register("applicationfee", { required: true })}
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
                                        {...register("examfee", { required: true })}
                                        onChange={obj=>pickExamFee(obj.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Total Fee</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={totalfee}
                                        {...register("totalfee", { required: true })}
                                        onChange={obj=>pickTotalfee(obj.target.value)}
                                        />
                                    </div>
                                </div> 
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <button className="btn" onClick={handleSubmit(save)}>
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