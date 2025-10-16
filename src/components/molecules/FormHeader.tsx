import { Link } from "react-router-dom"
import { PiArrowBendUpRightLight } from "react-icons/pi"
import { PiArrowBendUpLeftLight } from "react-icons/pi"


export type HeaderProps = {
    title: string
    routeFor: string
}

export const FormHeader = ({
    title,
    routeFor

}:HeaderProps) => {

    return (
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-medium">{title}</h2>
            <Link to={routeFor}>

                {routeFor === "/" ?
                    <PiArrowBendUpLeftLight /> 
                    :
                    <PiArrowBendUpRightLight />}
            </Link>
        </div>
    )
}