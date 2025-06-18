import React, { use } from "react";
import { Link } from "react-router";

const JobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h3 className="text-3xl md:text-4xl text-center mb-6">
        My Posted Jobs: {jobs.length}
      </h3>
      <div className="overflow-x-auto rounded-lg border border-base-content/10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Job Title</th>
              <th>Application Deadline</th>
              <th>Application Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td><Link to={`/applications/${job._id}`}><button className="btn">View Applications</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;