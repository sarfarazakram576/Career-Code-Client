import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://career-code-server-fb-at-oken.vercel.app/",
});

const useAxiosSecure = () => {
  const { user, SignOutUser } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        SignOutUser()
        .catch(error => console.log(error))
      }
      console.log("error is interceptor", error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
