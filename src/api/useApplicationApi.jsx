import useAxiosSecure from "../Hooks/useAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();

  const myApplicationPromise = (email) => {
    return axiosSecure
      .get(`applications?email=${email}`)
      .then((res) => res.data);
  };
  return { myApplicationPromise };
};

export default useApplicationApi;
