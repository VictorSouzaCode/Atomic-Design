import { Link } from "react-router-dom"

const DashboardPage = () => {
  return (
    <div className="gap-4">
      <Link to="/" className="text-blue-500">Login</Link>
      <p>DashboardPage</p>
    </div>
  )
}

export default DashboardPage