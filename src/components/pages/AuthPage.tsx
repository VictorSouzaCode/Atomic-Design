import { AuthTemplate } from "../templates/AuthTemplate"
import { LoginForm } from "../organisms/LoginForm"

const AuthPage = () => {
  return (
    <AuthTemplate>
        <LoginForm/>
    </AuthTemplate>
  )
}

export default AuthPage