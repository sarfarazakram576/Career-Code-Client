import React from "react";

const JobApplicationRow = ({ application, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={application.company_logo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
            <div>
              <div className="font-bold"> {application.company}</div>
              <div className="text-sm opacity-50">{application.location}</div>
            </div>
        </div>
      </td>
      <td>{application.title}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default JobApplicationRow;
