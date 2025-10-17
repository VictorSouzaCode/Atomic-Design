import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import DashboardPage from "./components/pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Next i will build a dashboard, with a sidebar, header and main content area

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
