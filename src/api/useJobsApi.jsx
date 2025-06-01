import useAxiosSecure from "../Hooks/useAxiosSecure";

const useJobsApi = () => {
  const axiosSecure = useAxiosSecure();
  
  const jobsCreatedByPromise = (email) => {
    return axiosSecure
      .get(`jobs/applications?email=${email}`)
      .then((res) => res.data);
  };
  return { jobsCreatedByPromise };
};

export default useJobsApi;
