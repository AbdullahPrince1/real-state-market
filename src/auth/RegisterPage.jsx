import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { use } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {
  const { createUser } = use(AuthContext);
  const handleForm = (evt) => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const photo = evt.target.photo.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: name, photoURL: photo }).then(() => {
          toast("Account Created");
        });
      })
      .catch((err) => {
        const error = err.message;
        toast("Error", error);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen rounded-2xl">
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
              },
            },
            error: {
              style: {
                background: "red",
              },
            },
          }}
        />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl p-3 font-bold text-center">
              Register now!
            </h1>
            <form onSubmit={handleForm} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter Name"
              />

              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Enter Email"
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Enter Password"
              />

              <a className="link link-hover ">Forgot password?</a>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-center">
                Already Have an Account ?{" "}
                <Link
                  to={"/auth/login"}
                  className="hover:underline hover:text-orange-400"
                >
                  Login Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
