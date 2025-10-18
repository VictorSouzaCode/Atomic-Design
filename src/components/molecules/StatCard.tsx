import { Card } from "../atoms"

export type StatCardProps = {
    title: string,
    value: number | string,
    icon?: React.ReactNode
}

export const StatCard = ({
    title,
    value,
    icon
    
}:StatCardProps) => {

  return (
    <Card>
        <div className="flex items-center space-x-4">
            {icon && <div className="text-blue-600">{icon}</div>}
            <div>
                <p className="text-gray-500">{title}</p>
                <p className="text-2xl font-semibold">{value}</p>
            </div>
        </div>
    </Card>
  )
}