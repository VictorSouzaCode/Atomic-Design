import { LoginForm } from "../organisms"
import { AuthTemplate } from "../templates/AuthTemplate"


const LoginPage = () => {
  return (
    <AuthTemplate>
        <LoginForm/>
    </AuthTemplate>
  )
}

export default LoginPage