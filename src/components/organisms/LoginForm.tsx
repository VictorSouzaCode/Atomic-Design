import { InputField, FormActions } from "../molecules"
import { useState } from "react"

export const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Logging in as ${email}`)
    }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-medium">Login</h2>

        <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>

        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>

        <FormActions/>
    </form>
  )
}

// Organisms – Larger, Functional Groups
// Uses Molecules to build a fully functional Login Form.
// Still doesn’t define page layout — just the form structure itself.