import { StatCard } from "../molecules/StatCard"
import { FaUser, FaShoppingCart, FaDollarSign, FaBattleNet, FaCarrot } from "react-icons/fa"

export const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6">
      <StatCard title="Users" value={1200} icon={<FaUser size={30}/>}/>
      <StatCard title="Orders" value={320} icon={<FaShoppingCart size={30}/>}/>
      <StatCard title="Revenue" value="$12,400" icon={<FaDollarSign size={30}/>}/>
      <StatCard title="Style" value="Cool" icon={<FaBattleNet size={30}/>}/>
      <StatCard title="hungry" value="Not at all" icon={<FaCarrot size={30}/>}/>
    </div>
  )
}


/* Organism combines multiple StatCard molecules into a grid.

I can reuse DashboardGrid in multiple pages (Dashboard, Analytics, Admin panel). */