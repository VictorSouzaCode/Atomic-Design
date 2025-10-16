import { Button } from "../atoms"



export const FormActions = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
        <Button label="Cancel"/>
        <Button label="Login" type="submit"/>
    </div>                
  )
}

// Groups multiple Button atoms.
// Makes button groups reusable (e.g., across different forms).