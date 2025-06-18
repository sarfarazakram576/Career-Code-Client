import { lazy, Suspense, useEffect, useState } from "react";
import Banner from "./Banner";
const HotJobs = lazy(()=>import('./HotJobs'))

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://career-code-server-fb-at-oken.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
     <Suspense fallback={<span className="text-2xl">Loading...</span>}>
      <HotJobs jobs={jobs}></HotJobs>
     </Suspense>
    </div>
  );
};

export default Home;
