import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <aside className="flex flex-col shadow-md w-32 items-center mt-6">
      <h2 className="font-semibold">MyApp</h2>
      <nav className="flex flex-col items-center mt-6 gap-y-4 space-y-3">
        <Link to="/">Login</Link>
        <Link to="signup">Sign-up</Link>
        <Link to="dashboard">Dashboard</Link>
      </nav>
    </aside>
  )
}