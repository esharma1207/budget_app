import wave from "../assets/wave.svg"
//helper functions and react router dom
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../Helpers"
import Nav from "../components/navs"

//loader
export function mainLoader() {
    const userName = fetchData("userName");
    return {
        userName
    }
}


const Main = () =>{

    const {userName} = useLoaderData()
    return(
        <div className="layout">
            <Nav userName = {userName}/>
            <main>
            <Outlet />

            </main>
            <img src = {wave} /> 
            
            </div>
    )
}
export default Main


