import { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import JobLists from "./JobLists";
import useJobsApi from "../../api/useJobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const { jobsCreatedByPromise } = useJobsApi();

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
