import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const PostJainOnline = () => {
  const { register, handleSubmit } = useForm();

  const [message, updateMessage] = useState("");
  const [course, pickCourse] = useState("");
  const [spec, pickSpec] = useState("");
  const [skillpartner, pickSkillPartner] = useState("");
  const [channelpartner, pickChannelPartner] = useState("");
  const [regfee, pickregfee] = useState("");
  const [programfeeone, pickProgramFeeOne] = useState("");
  const [programfeetwo, pickProgramFeeTwo] = useState("");
  const [programfeethree, pickProgramFeeThree] = useState("");
  const [examfee, pickExamfee] = useState("");

  const save = () => {
    var url =
      "https://distance-api-url.herokuapp.com/applicationform/postjainonline";
    var data = {
      course: course,
      spec: spec,
      skillpartner: skillpartner,
      channelpartner: channelpartner,
      regfee: regfee,
      programfeeone: programfeeone,
      programfeetwo: programfeetwo,
      programfeethree: programfeethree,
      examfee: examfee,
    };
    axios.post(url, data).then((response) => {
      updateMessage(response.data);
      pickCourse("");
      pickSpec("");
      pickSkillPartner("");
      pickChannelPartner("");
      pickregfee("");
      pickProgramFeeOne("");
      pickProgramFeeTwo("");
      pickProgramFeeThree("");
      pickExamfee("");
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Jain University Online</div>
            <div className="card-body">
              <p className="text-center text-success">{message}</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Course</label>
                    <input
                      type="text"
                      className="form-control"
                      value={course}
                      {...register("program", { required: true })}
                      onChange={(obj) => pickCourse(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      value={spec}
                      {...register("duration", { required: true })}
                      onChange={(obj) => pickSpec(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Skill Partner</label>
                    <input
                      type="text"
                      className="form-control"
                      value={skillpartner}
                      onChange={(obj) => pickSkillPartner(obj.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Channel Partner</label>
                    <input
                      type="text"
                      className="form-control"
                      value={channelpartner}
                      onChange={(obj) => pickChannelPartner(obj.target.value)}
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
                      onChange={(obj) => pickregfee(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Program Fee one</label>
                    <input
                      type="text"
                      className="form-control"
                      value={programfeeone}
                      {...register("theoryfee", { required: true })}
                      onChange={(obj) => pickProgramFeeOne(obj.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Program Fee Two</label>
                    <input
                      type="text"
                      className="form-control"
                      value={programfeetwo}
                      {...register("practicalfee", { required: true })}
                      onChange={(obj) => pickProgramFeeTwo(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Program Fee Three</label>
                    <input
                      type="text"
                      className="form-control"
                      value={programfeethree}
                      {...register("regfee", { required: true })}
                      onChange={(obj) => pickProgramFeeThree(obj.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Exam Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={examfee}
                      {...register("cerfee", { required: true })}
                      onChange={(obj) => pickExamfee(obj.target.value)}
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

export default PostJainOnline;
