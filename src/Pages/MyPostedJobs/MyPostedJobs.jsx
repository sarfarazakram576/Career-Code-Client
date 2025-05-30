import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import JobLists from "./JobLists";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div className="my-12">

        <Suspense>
          <JobLists
            jobsCreatedByPromise={jobsCreatedByPromise(
              user?.email || user?.providerData[0]?.email
            )}
          ></JobLists>
        </Suspense>
    </div>
  );
};

export default MyPostedJobs;
