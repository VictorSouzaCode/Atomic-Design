import { cva } from 'class-variance-authority';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string,
    variant?: "primary" | "secondary" | "danger",
    size?: "small" | "medium" | "large",
    type?: "button" | "submit",
    className?: string,
    children?: React.ReactNode,
    onClick?: () => void,
}

const btnCVA = cva(
    "rounded-md font-semibold transition-colors duration-100 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-blue-600 text-white hover:bg-blue-700",
                secondary: "bg-gray-600 text-white hover:bg-gray-700",
                danger: "bg-red-600 text-white hover:bg-red-700"
            },
            size: {
                small: "px-4 py-2",
                medium: "px-6 py-4",
                large: "px-8 py-6"
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "small"
        }
    }
)

export const Button = ({
    label,
    variant,
    size,
    type = "button",
    className,
    children,
    onClick,
    ...props

}:ButtonProps) => {
  return (
    <button 
    type={type} 
    onClick={onClick} 
    className={btnCVA({variant, size, className})} 
    {...props}
    >
        {label ? label : children}
    </button>
  )
}

/* 
The button is a pure, reusable element.

It doesn’t know where or how it will be used — it only knows how to look and behave as a button.
*/