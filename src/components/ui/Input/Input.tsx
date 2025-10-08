interface InputType
{
    placeholder : string;
    type : string;
}
export default function Input({placeholder , type } : InputType) {
  return (
    <input type={type} placeholder={placeholder} className=" w-full border border-[#EAEAEA]  p-3  placeholder:text-sm placeholder:text-[#737373] "/>
  )
}
