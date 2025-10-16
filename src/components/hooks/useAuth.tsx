import { useState } from "react";

export const useAuth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        alert(`Logging in as ${email}`)
    }

    return (
        {email, setEmail, password, setPassword, name, setName, handleSubmit}
    )
}