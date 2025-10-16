import { InputField, FormActions, FormHeader } from "../molecules"
import { useAuth } from "../hooks/useAuth";

const SignupForm = () => {

  const {email, setEmail, password, setPassword, name, setName, handleSubmit} = useAuth()

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

export default SignupForm