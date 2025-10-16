import { SignupForm } from "../organisms/SignupForm"
import { AuthTemplate } from "../templates/AuthTemplate"

const SignupPage = () => {
  return (
    <AuthTemplate>
      <SignupForm />
    </AuthTemplate>
  )
}

export default SignupPage