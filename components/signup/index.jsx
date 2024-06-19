"use client"

const Signup = () => {
  return (
    <div>
      <h5 className="heading mt-3 mb-3">Sigup in to your account</h5>
      <p className="mt-3 mb-3">
        Hey, Enter your details to get sign into your account{" "}
      </p>

      <form>
        <div className="mt-3 mb-3 p-2 login-form">
          <label className="text-muted">enter email id</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="sign-email"
          />
        </div>
        <div className="mt-3 mb-3 p-2 login-form">
          <label className="text-muted">enter password </label>
          <input
            type="text"
            placeholder="example:1234"
            className="sign-password"
          />
        </div>
        <button className="sign-btn">Get Started</button>
      </form>

      <div className="mt-4 mb-3">
        <p>Don’t have an account? Sign up now</p>
      </div>
    </div>
  );
};

export default Signup;
