import { Button } from "../atoms"

export const Header = () => {
  return (
    <header className="shadow-sm p-4 flex justify-between items-center">
      <h1 className="font-semibold text-2xl text-gray-800">Dashboard</h1>
      <Button label="Log out" size="small" variant="secondary"></Button>
    </header>
  )
}

// A simple header (can later include a profile menu, search bar, notifications, etc.).