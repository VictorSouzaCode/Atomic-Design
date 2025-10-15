// A simple login page structured according to Atomic Design:

// Atoms: Label, Input, Button, The Smallest Reusable Pieces

// Molecules: InputField (Label + Input), FormActions (Buttons together), Atoms Working Together

// Organisms: LoginForm (collection of Molecules), Larger, Functional Groups

// Template: AuthTemplate (basic layout for auth pages), Page Layouts Without Content

// Page: LoginPage (actual page with content), Real Content + Data


// Putting It All Together, In your main.tsx (or App.tsx):


/* visually 
Page
 └── Template
      └── Organism
           └── Molecules
                └── Atoms
*/

// Each layer depends only on the one below it, never above.That’s how professionals keep their UIs scalable, consistent, and reusable.

/*
Why This Matters?
 
Consistency: Every part of your UI uses the same atoms molecules.

Reusability: Build once, use anywhere.

Scalability: When your app grows, you just compose new organisms or templates.

Maintainability: If you redesign a button, it updates everywhere automatically.
*/