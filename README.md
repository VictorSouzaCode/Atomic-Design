# Atomic Design

I Built a simple login, signup and dashboard pages and all of them were structured according to Atomic Design.

### Atomic design explained

Atoms: Label, Input, Button, The Smallest Reusable Pieces

Molecules: InputField (Label + Input), FormActions (Buttons together), Atoms Working Together

Organisms: LoginForm (collection of Molecules), Larger Functional Groups

Template: AuthTemplate (basic layout for auth pages), Page Layouts Without Content

Page: LoginPage (actual page with content), Real Content + Data


Putting It All Together, In my main.tsx (or App.tsx):


Simple visualization

   Page

   └── Template

      └── Organism

           └── Molecules

                └── Atoms

Each layer depends only on the one below it, never above.That’s how professionals keep their UIs scalable, consistent, and reusable.


### Why This Matters?
 
Consistency: Every part of my UI uses the same atoms molecules.

Reusability: Build once, use anywhere.

Scalability: When my app grows, I just compose new organisms or templates.

Maintainability: If I redesign a button, it updates everywhere automatically.
