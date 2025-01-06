import { useContext } from "react"
import { Themeprovider } from "../components/Usecontext"


var Studentres = () =>{
    var result = useContext(Themeprovider)
    return (
        <>
            <h2>This is Student results is {result.CGPA} and GPA is {result.gpa}</h2>

        </>
    )
}

export default Studentres
