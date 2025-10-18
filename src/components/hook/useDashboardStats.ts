import { useQuery } from "@tanstack/react-query";
import type { StatCardProps } from "../molecules/StatCard";

type Stats = {
  users: number;
  orders: number;
  revenue: number;
};

const fetchStats = async (): Promise<Stats> => {
  const res = await fetch("/api/stats"); // replace with real API
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
};
/* async: Makes the function return a Promise

Promise<Stats>: TypeScript return type - promises to return a Stats object

Error handling: Throws an error if the HTTP response is not successful (status outside 200-299)

res.json(): Parses the JSON response body

*/


export const useDashboardStats = () => {
  return useQuery({
    queryKey: ["dashboardStats"],
    queryFn: fetchStats,
    staleTime: 1000 * 60, // 1 minute
    refetchInterval: 1000 * 30, // refetch every 30 seconds
  });
};

/* Custom Hook: A reusable function that uses React hooks

useQuery: TanStack Query's hook for data fetching 

queryKey: ["dashboardStats"]

Unique identifier for this query

Used for:

Caching: Stores data under this key

Refetching: Automatically refetches when this key changes

Invalidation: You can invalidate all queries with this key

queryFn: fetchStats
The function that actually fetches the data
TanStack Query will call this function when needed
Must return a Promise
staleTime: 1000 * 60

staleTime: 1000 * 60
How long data is considered "fresh" after fetching
During this time:
No background refetches occur
If the same data is requested, it uses the cached version
After this time: Data becomes "stale" and may be refetched in background

refetchInterval: 1000 * 30
Automatically refetches data every 30 seconds
Useful for real-time dashboards, live data, stock prices, etc.
Continues refetching even when the component is not in focus

What You Get From useQuery Return Value
When you use this hook:
const { data, isLoading, isError, error, refetch } = useDashboardStats();

data: Your Stats object (or undefined while loading)
refetch: Function to manually trigger a refetch
*/