import NavBar from "components/NavBarLogged";
import SideBar from "components/SideBar";

export default function Dashboard() {
    return(
        <div className="bg-primary h-screen" >
            <NavBar/>
            <SideBar/>
        </div>
    )
}