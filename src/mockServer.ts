export const fetchDashboardStats = async () => {
  const [usersRes, productsRes, cartsRes] = await Promise.all([
    fetch("https://dummyjson.com/users?limit=100"),
    fetch("https://dummyjson.com/products?limit=100"),
    fetch("https://dummyjson.com/carts?limit=10"),
  ]);

  if (!usersRes.ok || !productsRes.ok || !cartsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const users = await usersRes.json();
  const products = await productsRes.json();
  const carts = await cartsRes.json();

  // Summarize the data
  const totalUsers = users.total;
  const totalProducts = products.total;
  const totalRevenue = carts.carts.reduce(
    (sum: number, cart: any) => sum + cart.total,
    0
  );

  return {
    users: totalUsers,
    orders: totalProducts,
    revenue: totalRevenue,
  };
};

/*
What this does:

Fetches users, products, and carts data simultaneously with Promise.all().

If any request fails → throws an error.

Returns totals:

users = total users

orders = total products

revenue = sum of all cart totals
*/