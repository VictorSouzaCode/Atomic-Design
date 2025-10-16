import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <nav className="absolute top-0 w-screen h-12 bg-amber-200 flex gap-4">
        <Link to="/" >Login</Link>
        <Link to="signup" >Sign Up</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
