import { Input, Label } from "../atoms"

type InputFieldProps = {
    label: string,
    value: string,
    type?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField = ({
    label,
    value,
    type,
    placeholder,
    onChange

}:InputFieldProps) => {
  return (
    <div className="rounded-md w-full flex flex-col items-center mt-4">
        {/* <Label text={label}/> */}
        <Input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

// Molecules – Atoms Working Together
// Combines two atoms: Label and Input.
// Now I can add InputField anywhere with one simple component instead of writing both atoms every time.