import { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../Hooks/useAuth";
import { myApplicationPromise } from "../../api/applicationsApi";



const MyApplication = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-5xl mx-auto my-12">
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={<span className="text-2xl">Loading...</span>}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(
            user?.email || user?.providerData[0]?.email
          )}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
