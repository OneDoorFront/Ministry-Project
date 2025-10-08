interface InputType
{
    placeholder : string;
    type : string;
    id?: string;
}
export default function Input({placeholder , type , id} : InputType) {
  return (
    <input type={type} id={id} placeholder={placeholder} className=" rounded-lg w-full border border-borderColor  p-3  placeholder:text-sm placeholder:text-[#737373] "/>
  )
}
