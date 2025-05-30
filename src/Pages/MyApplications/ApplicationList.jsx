import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div className="mt-12">
      <h3 className="text-3xl md:text-4xl text-center mb-6">
        Jobs Applied so far: {applications.length}
      </h3>
      <div className="overflow-x-auto border border-base-content/10 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Company</th>
              <th>Job Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                index={index}
                application={application}
                key={application._id}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
