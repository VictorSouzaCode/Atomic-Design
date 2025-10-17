import { BaseTemplate } from "../templates/BaseTemplate"
import { DashboardGrid } from "../organisms"


const DashboardPage = () => {
  return (
    <BaseTemplate>
      <section className="flex flex-col justify-center items-center border">

        <h2 className="text-2xl font-semibold mb-1">Welcome back!</h2>

          <p className="text-gray-700">
          This is your dashboard. You can add charts, tables, or cards here later.
        </p>

        <DashboardGrid/>
      </section>
    </BaseTemplate>
  )
}

export default DashboardPage

// Uses the BaseTemplate, just like LoginPage uses AuthTemplate.
// The key difference is the layout, not the page content.

// Page flow
/* DashboardPage
 └── BaseTemplate
      ├── Sidebar
      ├── Header
      └── DashboardGrid (Organism)
           ├── StatCard (Molecule)
           │    └── Card (Atom)
*/