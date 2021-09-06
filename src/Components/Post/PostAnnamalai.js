import React,{useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const PostAnnamalai = () =>{

    const { register, handleSubmit } = useForm();


    const[message, updateMessage] = useState("");
    const[course, pickCourse] = useState("");
    const[unifee, pickUnifee] = useState("");
    const[admissionfee, pickAdmissionfee] = useState("");
    const[examfee, pickExamfee] = useState("");
    const[centerfee, pickCenterfee] = useState("");
    const[totalfee, pickTotalfee] = useState("");

    const save = () =>{
        var url="https://distance-api-url.herokuapp.com/applicationform/postannamalaiuniversity";
        var data={"course":course, "unifee":unifee, "admissionfee":admissionfee, "examfee":examfee, "centerfee":centerfee, "totalfee":totalfee};
        axios.post(url, data)
        .then(response =>{
            updateMessage(response.data);
            pickCourse("");
            pickUnifee("");
            pickExamfee("");
            pickCenterfee("");
            pickTotalfee("");

        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Annamalai University</div>
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
                                        <label>University Fees</label>
                                        <input type="text" 
                                        className="form-control"
                                        value={unifee}
                                        {...register("unifee", { required: true })}
                                        onChange={obj=>pickUnifee(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Admission Fees</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={admissionfee}
                                        {...register("admissionfee", { required: true })}
                                        onChange={obj=>pickAdmissionfee(obj.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Exam Fees</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={examfee}
                                        {...register("examfee", { required: true })}
                                        onChange={obj=>pickExamfee(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Center Fees</label>
                                        <input type="text" 
                                        className="form-control" 
                                        value={centerfee}
                                        {...register("coursefee", { required: true })}
                                        onChange={obj=>pickCenterfee(obj.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Total Fees</label>
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

export default PostAnnamalai