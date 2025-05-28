import React from "react";
import { PiBriefcaseLight } from "react-icons/pi";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    company_logo,
    location,
    company,
    title,
    jobType,
    description,
    requirements,
    salaryRange
  } = job;
  return (
    <div className="h-full p-6 border-base-300 border-2 rounded-lg bg-base-200 hover:bg-base-100 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div>
          <img src={company_logo} alt="" className="w-full" />
        </div>
        <div className="w-full">
          <h4 className="font-bold mb-1">{company}</h4>
          <p className="text-xs text-gray-400 font-semibold flex gap-1">
            <LuMapPin size={16} /> {location}
          </p>
        </div>
      </div>
      <h2 className="font-bold my-4 text-lg">{title}</h2>

      <div>
        <p className="text-gray-400 font-semibold flex items-center gap-1 text-xs">
          <PiBriefcaseLight size={17} /> {jobType}
        </p>
      
        <p className="my-4 text-xs"><strong>Salary:</strong> {salaryRange.min}-{salaryRange.max} {salaryRange.currency} / Month</p>

        <p className="my-4 text-xs">{description}</p>

        <div>
          {requirements.map((skill) => (
            <div className="badge badge-info h-auto w-auto p-1 text-[10px] font-semibold m-1 rounded-full">
              {skill}
            </div>
          ))}
        </div>
       <Link to={`/jobs/${_id}`}><button className="btn btn-soft btn-info my-6">Show Details</button></Link>
      </div>
    </div>
  );
};

export default JobCard;
// {
// "_id": "6836c8467952b159d420de25",
// "title": "Software Engineer",
// "location": "Halishohor, Chittagong",
// "jobType": "Hybrid",
// "category": "Engineering",
// "applicationDeadline": "2024-12-31",
// "salaryRange": {
// "min": 40000,
// "max": 60000,
// "currency": "bdt"
// },
// "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
// "company": "Favorite IT",
// "requirements": [
// "JavaScript",
// "React",
// "Node.js",
// "MongoDB"
// ],
// "responsibilities": [
// "Develop and maintain software",
// "Collaborate with the team",
// "Participate in code reviews"
// ],
// "status": "active",
// "hr_email": "hr@techsolutions.com",
// "hr_name": "Farhan Rahman",
// "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
// },
