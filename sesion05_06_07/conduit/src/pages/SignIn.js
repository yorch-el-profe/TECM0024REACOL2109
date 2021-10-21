import Navbar from "../components/navbar";
import SignInForm from "../components/signin-form";

function SignIn() {
  return (
    <>
      <Navbar />

      <div className="container mt-3 d-flex justify-content-center flex-column align-items-center">
        <h1>Sign In</h1>
        <SignInForm />
      </div>
    </>
  );
}

export default SignIn;
