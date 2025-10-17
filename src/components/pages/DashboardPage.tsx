import { BaseTemplate } from "../templates/BaseTemplate"


const DashboardPage = () => {
  return (
    <BaseTemplate>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
          <p className="text-gray-700">
          This is your dashboard. You can add charts, tables, or cards here later.
        </p>
      </section>
    </BaseTemplate>
  )
}

export default DashboardPage

// Uses the BaseTemplate, just like LoginPage uses AuthTemplate.
// The key difference is the layout, not the page content.