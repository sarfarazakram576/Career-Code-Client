import { motion } from "motion/react";
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 px-12 mb-12 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse items-center max-w-5xl mx-auto gap-8">
        <div className="flex-1 items-center flex relative">
          <motion.img
            animate={{
              y: [0, -70, 0], transition: {duration: 5, repeat: Infinity}
            }}
            src={team1}
            className="w-[70%] absolute border-l-6 border-blue-500 border-b-6 rounded-[40px_40px_40px_6px] shadow-2xl"
          />
          <motion.img
            animate={{
              x: [100, 170, 100], transition: {duration: 6, delay: 1, repeat: Infinity}
            }}
            src={team2}
            className="w-[50%] top-1 absolute border-l-6 border-blue-500 border-b-6 rounded-[40px_40px_40px_6px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{ rotate: 180, x:200, y:200, transition: { duration: 4 } }}
            className="text-5xl font-bold"
          >
            Latest Jobs For You!
          </motion.h1> */}

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-3xl md:text-4xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff", "#ff5733"],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
