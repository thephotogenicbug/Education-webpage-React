import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const PostJain = () => {
  const { register, handleSubmit } = useForm();

  const [message, updateMessage] = useState("");
  const [program, pickProgram] = useState("");
  const [duration, pickDuration] = useState("");
  const [yearone, pickYearOne] = useState("");
  const [yeartwo, pickYearTwo] = useState("");
  const [yearthree, pickYearThree] = useState("");
  const [theoryfee, pickTheoryFee] = useState("");
  const [practicalfee, pickPracticalFee] = useState("");
  const [registrationfee, pickRegistration] = useState("");
  const [certificatefee, pickCertificate] = useState("");
  const [semone, pickSemOne] = useState("");
  const [semtwo, pickSemTwo] = useState("");
  const [semthree, pickSemThree] = useState("");
  const [semfour, pickSemFour] = useState("");
  const [totalfee, pickTotalFee] = useState("");
  const [regfee, pickRegfee] = useState("");

  const save = () => {
    var url =
      "https://distance-api-url.herokuapp.com/applicationform/postjaindistance";
    var data = {
      program: program,
      duration: duration,
      yearone: yearone,
      yeartwo: yeartwo,
      yearthree: yearthree,
      theoryfee: theoryfee,
      practicalfee: practicalfee,
      registrationfee: registrationfee,
      certificatefee: certificatefee,
      semone: semone,
      semtwo: semtwo,
      semthree: semthree,
      semfour: semfour,
      totalfee: totalfee,
      regfee: regfee,
    };
    axios.post(url, data).then((response) => {
      updateMessage(response.data);
      pickProgram("");
      pickDuration("");
      pickYearOne("");
      pickYearTwo("");
      pickYearThree("");
      pickTheoryFee("");
      pickPracticalFee("");
      pickRegistration("");
      pickCertificate("");
      pickSemOne("");
      pickSemTwo("");
      pickSemThree("");
      pickSemFour("");
      pickTotalFee("");
      pickRegfee("");
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Jain University</div>
            <div className="card-body">
              <p className="text-center text-success">{message}</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Program</label>
                    <input
                      type="text"
                      className="form-control"
                      value={program}
                      {...register("program", { required: true })}
                      onChange={(obj) => pickProgram(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Duration</label>
                    <input
                      type="text"
                      className="form-control"
                      value={duration}
                      {...register("duration", { required: true })}
                      onChange={(obj) => pickDuration(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>1st Year Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={yearone}
                      onChange={(obj) => pickYearOne(obj.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>2nd Year Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={yeartwo}
                      onChange={(obj) => pickYearTwo(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>3rd Year Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={yearthree}
                      onChange={(obj) => pickYearThree(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Theory Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={theoryfee}
                      {...register("theoryfee", { required: true })}
                      onChange={(obj) => pickTheoryFee(obj.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Practical Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={practicalfee}
                      {...register("practicalfee", { required: true })}
                      onChange={(obj) => pickPracticalFee(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Registration Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={registrationfee}
                      {...register("regfee", { required: true })}
                      onChange={(obj) => pickRegistration(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Certificate Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={certificatefee}
                      {...register("cerfee", { required: true })}
                      onChange={(obj) => pickCertificate(obj.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>1st Semester</label>
                    <input
                      type="text"
                      className="form-control"
                      value={semone}
                      onChange={(obj) => pickSemOne(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>2nd Semester</label>
                    <input
                      type="text"
                      className="form-control"
                      value={semtwo}
                      onChange={(obj) => pickSemTwo(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>3rd Semester</label>
                    <input
                      type="text"
                      className="form-control"
                      value={semthree}
                      onChange={(obj) => pickSemThree(obj.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>4th Semester</label>
                    <input
                      type="text"
                      className="form-control"
                      value={semfour}
                      onChange={(obj) => pickSemFour(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Total Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={totalfee}
                      {...register("totalfee", { required: true })}
                      onChange={(obj) => pickTotalFee(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Registration Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={regfee}
                      {...register("regfee", { required: true })}
                      onChange={(obj) => pickRegfee(obj.target.value)}
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
  );
};

export default PostJain;
