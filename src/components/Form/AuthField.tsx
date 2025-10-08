import Input from "../ui/Input/Input";
import Label from "../ui/Label/Label";

interface AuthFieldProps {
  label: string;
  input: {
    id: string;
    type: string;
    placeholder: string;
  };
}
export default function AuthField({ label, input }: AuthFieldProps) {
  return (
    <div className="mb-6">
      <Label text={label} htmlFor={input.id} />
      <Input id={input.id} type={input.type} placeholder={input.placeholder} />
    </div>
  )
}
