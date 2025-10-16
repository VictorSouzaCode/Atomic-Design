import { InputField, FormActions, FormHeader } from "../molecules"
import { useAuth } from "../hooks/useAuth"


export const LoginForm = () => {

    const {email, setEmail, password, setPassword, handleSubmit} = useAuth()
    
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">

        <FormHeader title="Login" routeFor="signup"/>

        <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>

        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

        <FormActions/>
    </form>
  )
}

// Organisms – Larger, Functional Groups
// Uses Molecules to build a fully functional Login Form.
// Still doesn’t define page layout — just the form structure itself.