
type CardProps = {
    children: React.ReactNode
}

export const Card = ({
    children

}:CardProps) => {

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex-1">
        {children}
    </div>
  )
}