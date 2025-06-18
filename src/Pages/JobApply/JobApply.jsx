import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user?.email || user?.providerData[0]?.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("https://career-code-server-fb-at-oken.vercel.app/applications", application)
      .then((data) => {
        if(data.data.insertedId){
            toast.success("You successfully apply for this job")
        }
      });
  };
  return (
    <div className="my-12">
      <h1 className="text-4xl text-center mb-6">
        Apply for this Job:{" "}
        <Link className="underline text-blue-500" to={`/jobs/${jobId}`}>
          Details
        </Link>
      </h1>

      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 max-w-3xl mx-auto rounded-box border p-4">
          <label className="label">LinkedIn link</label>
          <input
            type="url"
            name="linkedIn"
            className="input w-full mb-4"
            placeholder="Your linkedIn profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input w-full mb-4"
            placeholder="Your Github profile link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input w-full mb-4"
            placeholder="Your Resume Link"
          />

          <input
            type="submit"
            value="Apply"
            className="btn btn-soft btn-primary"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
