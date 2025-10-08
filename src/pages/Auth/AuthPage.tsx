import NavBar from "../../components/NavBar/NavBar";
import AuthForm from "../../components/Form/AuthForm";

export default function AuthPage() {
  
  
  return (
    <section className=" min-h-screen">
      <NavBar showNavSide="hidden "/>
      <div className=" w-full h-full py-18.5 flex justify-center items-center">
        <div className=" w-[600px] p-10 rounded-[20px]  border border-[#FAFAFA]  shadow-xl shadow-black/5">
          <AuthForm/>
        </div>
      </div>
    </section>
  )
}
