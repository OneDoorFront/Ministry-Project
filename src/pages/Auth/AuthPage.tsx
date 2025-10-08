import NavBar from "../../components/NavBar/NavBar";

export default function AuthPage() {
  return (
    <section className=" h-screen">
      <NavBar showNavSide="hidden "/>
      <div className=" w-full h-full  flex justify-center items-center">
        <div className=" w-[600px] p-10 rounded-[20px]  border border-[#FAFAFA]  shadow shadow-black/5">
          <h2 className=" text-center text-xl font-semibold mb-2"></h2>
          <p className=" text-center mb-8 text-sm text-[#737373] "></p>
        </div>
      </div>
    </section>
  )
}
