import { useEffect, useState } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      {jobs.length !== 0 && <HotJobs jobs={jobs}></HotJobs>}
    </div>
  );
};

export default Home;
