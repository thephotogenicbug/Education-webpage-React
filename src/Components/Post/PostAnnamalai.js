import React,{useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const PostAnnamalai = () =>{

    const { register, handleSubmit } = useForm();


    const[message, updateMessage] = useState("");
    const[course, pickCourse] = useState("");
    const[specz, pickSpecz] = useState("");

    const save = () =>{
        var url="https://distance-api-url.herokuapp.com/applicationform/postannamalaiuniversity";
        var data={"course":course, "specz":specz};
        axios.post(url, data)
        .then(response =>{
            updateMessage(response.data);
            pickCourse("");
            pickSpecz("")

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
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
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
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Specialization</label>
                                                <input  type="text" 
                                                className="form-control"
                                                value={specz}
                                                {...register("specz", {required:true})}
                                                onChange={obj=>pickSpecz(obj.target.value)}
                                                />
                                            </div>
                                        </div>
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