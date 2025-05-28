import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id, title,company}=useLoaderData()
    return (
        <div className='text-center my-12'>
            <h1 className='text-4xl'>Job Detaills of: {title}</h1>
            <p className='my-4'>Company: {company}</p>
            <Link to={`/jobApply/${_id}`}><button className='btn btn-info mt-2'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;