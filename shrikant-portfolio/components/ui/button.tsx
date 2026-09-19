import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg'
}

export function Button({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default',
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50"
  
  const variants = {
    default: "bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90",
    outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white"
  }
  
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-11 px-8 text-base"
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}