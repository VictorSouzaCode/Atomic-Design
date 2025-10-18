

import { Sidebar } from "../organisms"
import { Header } from "../organisms"


type BaseTemplateProps = {
  children: React.ReactNode
}


export const BaseTemplate = ({
  children

}:BaseTemplateProps) => {

  return (
    <div className="bg-purple-400 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar/>

      <div className="flex flex-col flex-1">
        <Header/>
        <main className="p-6">{children}</main>
      </div>

    </div>
  )
}

// Explanation
// The Sidebar and Header are reusable Organisms.
// The children prop represents the page’s actual content.
// BaseTemplate defines the layout structure for the main 
// part of your app.

// Visual Hierarchy Example
/* DashboardPage
 └── BaseTemplate
      ├── Sidebar
      ├── Header
      └── Dashboard Content
*/

// BaseTemplate can be reused for all logged-in areas (e.g., Dashboard, Settings, Profile).
// AuthTemplate stays specific to pre-login pages.
// This separation keeps your UI architecture scalable, modular, and professional.