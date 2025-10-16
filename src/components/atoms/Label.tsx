
export type LabelProps = {
    text: string,
    htmlFor?: string,
    className?: string,
}

export const Label = ({
    text,
    htmlFor,
    className

}:LabelProps) => {
  return (
    <label 
    htmlFor={htmlFor} 
    className={`block mb-1 text-gray-700 font-medium ${className}`}
    >
        {text}
    </label>
  )
}