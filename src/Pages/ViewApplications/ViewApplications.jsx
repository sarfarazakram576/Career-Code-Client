import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    axios.patch(`https://career-code-server-fb-at-oken.vercel.app/applications/${app_id}`,{status: e.target.value})
    .then(res=>{
        if(res.data.modifiedCount){
            toast.success('You Successfully set the status.')
        }
    })

  };
  return (
    <div className="my-12">
      <h3 className="my-10 text-center text-3xl font-bold">
        {applications.length} Applications for: this job
      </h3>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Applicant Email</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status || ''}
                    className="select"
                  >
                    <option value='' disabled>Update Status</option>
                    <option>Under Review</option>
                    <option>Call For Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
