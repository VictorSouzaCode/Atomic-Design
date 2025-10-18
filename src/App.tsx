import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import DashboardPage from "./components/pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Next i will build a dashboard, with a sidebar, header and main content area

const queryClient = new QueryClient()

function App() {

  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}/>
      </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
