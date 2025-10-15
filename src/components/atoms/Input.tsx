
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string,
}

export const Input = ({
    type = "text",
    value,
    onChange,
    placeholder,
    className,
    ...props

}:InputProps) => {
  return (
    <input 
    type={type} 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    {...props}
    className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-100 ${className}`}/>
  )
}