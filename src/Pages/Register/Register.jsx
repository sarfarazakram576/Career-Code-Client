import Lottie from "lottie-react";
import registerLottie from "../../assets/Lotties/register.json";
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import SocialLogin from "../../Shared/SocialLogin";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        console.log(res);
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero my-16">
      <div className="hero-content flex gap-8 items-center">
        <Lottie
          animationData={registerLottie}
          loop={true}
          className="h-72 w-auto"
        ></Lottie>

        <div className="card bg-base-100 w-full max-w-xs shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold mb-4">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input mb-4"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input mb-4"
                placeholder="Password"
                name="password"
              />
              <button className="btn btn-neutral mt-2">Register</button>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
