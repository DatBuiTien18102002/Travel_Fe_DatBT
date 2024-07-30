import OverlaySignInForm from "@/layouts/AuthLayout/OverlaySignInForm";
import OverlaySignUpForm from "@/layouts/AuthLayout/OverlaySignUpform";
import { Navigate, useLocation } from "react-router-dom";
import { SignInForm, SignUpForm } from "@/forms";

const AuthLayout = () => {
  const isAuthenticated = false;
  const { pathname } = useLocation();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-b from-sky-dark  to-sky">
            {pathname === "/sign-in" ? <div /> : <div className="showSignUp" />}
            <div className="authForm relative w-[750px] min-h-[500px] max-w-full mx-[10px] bg-white rounded-[13px] overflow-hidden shadow-searchDetail">
              <SignUpForm />
              <SignInForm />

              <div className="overlay-container absolute bg-sky top-0 left-[60%] w-[40%] h-full overflow-hidden transition-form z-[10] max-md:hidden">
                <div className="overlay relative bg-sky text-white left-[-150%]  w-[250%] h-full transition-form">
                  <OverlaySignUpForm />
                  <OverlaySignInForm />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
