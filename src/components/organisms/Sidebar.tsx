import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <aside className="flex flex-col shadow-md w-32 items-center p-6 bg-gray-100">
      <h2 className="font-semibold text-2xl mb-6">MyApp</h2>
      <nav className="flex flex-col items-center mt-6 gap-y-4 space-y-3">
        <Link to="/" className="hover:text-blue-600">Login</Link>
        <Link to="signup" className="hover:text-blue-600">Sign-up</Link>
        <Link to="dashboard" className="hover:text-blue-600">Dashboard</Link>
      </nav>
    </aside>
  )
}