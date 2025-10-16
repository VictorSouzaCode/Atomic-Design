import { LoginForm } from "../organisms/LoginForm"
import { AuthTemplate } from "../templates/AuthTemplate"


const LoginPage = () => {
  return (
    <AuthTemplate>
        <LoginForm/>
    </AuthTemplate>
  )
}

export default LoginPage