interface btnType
{
    text : string;
}
export default function AuthBtn({text} : btnType ) {
  return (
    <button className="mt-2 w-full mb-4 rounded-xl p-3 text-sm font-medium text-center text-white bg-Primary">
      {text}
    </button>
  )
}
