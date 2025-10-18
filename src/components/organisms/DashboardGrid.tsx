import { StatCard } from "../molecules/StatCard"
import { FaUser, FaShoppingCart, FaDollarSign, FaBattleNet, FaCarrot } from "react-icons/fa"
import { useDashboardStats } from "../hook/useDashboardStats"

export const DashboardGrid = () => {
  const { data, isLoading, isError } = useDashboardStats();

  if(isLoading) return <p className="text-gray-600">Loading dashboard data...</p>

  if (isError)
    return (
      <p className="text-red-500 font-semibold">
        Failed to fetch dashboard stats.
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6">

      <StatCard title="Users" value={data?.users ?? 0} icon={<FaUser size={30}/>}/>

      <StatCard title="Orders" value={data?.orders ?? 0} icon={<FaShoppingCart size={30}/>}/>

      <StatCard title="Revenue" value={`$${data?.revenue ?? 0}`} icon={<FaDollarSign size={30}/>}/>

      <StatCard title="Style" value="Cool" icon={<FaBattleNet size={30}/>}/>

      <StatCard title="hungry" value="Not at all" icon={<FaCarrot size={30}/>}/>
    </div>
  )
}


/* Organism combines multiple StatCard molecules into a grid.

I can reuse DashboardGrid in multiple pages (Dashboard, Analytics, Admin panel). */