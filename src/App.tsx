import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Next i will build a dashboard, with a sidebar, header and main content area

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
