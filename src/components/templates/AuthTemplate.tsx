

type AuthTemplateProps = {
    children: React.ReactNode,
}

export const AuthTemplate = ({
    children
}:AuthTemplateProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
        {children}
    </div>
  )
}

// Templates define layout, not data.
// Provides consistent structure for all authentication-related pages (Login, Signup, Forgot Password).