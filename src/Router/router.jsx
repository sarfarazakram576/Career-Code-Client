import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplications/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`https://career-code-server-fb-at-oken.vercel.app/jobs/${params.id}`),
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRouter>
            <MyApplication></MyApplication>
          </PrivateRouter>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRouter>
            <AddJob></AddJob>
          </PrivateRouter>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRouter>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRouter>
        ),
      },
      {
        path: "/applications/:job_id",
        loader: ({ params }) => fetch(`https://career-code-server-fb-at-oken.vercel.app/applications/job/${params.job_id}`),
        element: (
          <PrivateRouter>
            <ViewApplications></ViewApplications>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
