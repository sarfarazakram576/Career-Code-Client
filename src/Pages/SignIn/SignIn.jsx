import React, { use } from "react";
import signInLottie from "../../assets/Lotties/signIn.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Contexts/AuthContext";
import SocialLogin from "../../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { SignInUser } = use(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state || '/'

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;

    SignInUser(email, password)
      .then(() => {
        navigate(from)
        form.reset()
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="hero my-16">
      <div className="hero-content flex gap-8 items-center">
        <Lottie
          animationData={signInLottie}
          loop={true}
          className="h-80 w-auto"
        ></Lottie>

        <div className="card bg-base-100 w-full max-w-xs shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold mb-4">Sign In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
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
              <button className="btn btn-neutral mt-2">Sign In</button>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
