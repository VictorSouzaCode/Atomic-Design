import { InputField, FormActions, FormHeader } from "../molecules"
import { useState } from "react";

export const SignupForm = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Creating account for ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <FormHeader title="Sign-Up" routeFor="/"/>

      <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>

      <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username"/>

      <InputField label="Email" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

      <FormActions/>
    </form>
  )
}


// Uses the same atoms and molecules as the login form.
// Only the internal logic (state + handleSubmit) differs.
// It still doesn’t define layout — that’s for the Template.
// templates ensure consistent layouts.
// pages bring everything together with data and routing.
// add new features (Signup) without breaking existing code.