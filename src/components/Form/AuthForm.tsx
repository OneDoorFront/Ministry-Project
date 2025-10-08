import { Link, useLocation } from "react-router-dom";
import { loginData, signUpData } from "../../data/authData";
import SideBySideFields from "./SideBySideFields";
import AuthField from "./AuthField";
import AuthBtn from "../ui/Buttons/AuthBtn";

export default function AuthForm() {
    const location = useLocation();
    const isLogin = location.pathname.includes("login");
    const data = isLogin ? loginData[0] : signUpData[0];
  return (
    <>
        <h2 className=" text-center text-xl font-semibold mb-2">{data.title}</h2>
        <p className=" text-center mb-8 text-sm text-[#737373] ">{data.subTitle}</p>
        <form className="w-full ">
            {!isLogin && (
            <SideBySideFields fields={data.form.slice(0, 2)} />
            )}
            {data.form.slice(isLogin ? 0 : 2).map((field, index) => (
                <AuthField key={index} label={field.label} input={field.input} />
            ))}
            <AuthBtn text={data.button} />
        </form>       
        {/* رابط للتبديل بين الصفحتين */}
          <p className="text-center text-sm mt-4">
            {data.navLink}{" "}
            {isLogin ? (
              <Link to="/signup" className="ml-2 underline">
                Sign Up
              </Link>
            ) : (
              <Link to="/login" className="ml-2 underline">
                Log In
              </Link>
            )}
          </p>
    </>
  )
}
