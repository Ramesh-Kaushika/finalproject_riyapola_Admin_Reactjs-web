import AddVehicle from "../../pages/AddVehicle/AddVehicle.jsx";
import SearchVehicle from "../../pages/SearchVehicle/SearchVehicle.jsx";
import ShowVehicle from "../../pages/ShowVehicle/ShowVehicle.jsx";
import AdminData from "../AdminData/AdminData.jsx";
import DashBoard from "../../pages/DashBoard/DashBoard.jsx";


const routes =[
    {
        name:"DashBoard",
        key:"DashBoard",
        path:"/dashBoard",
        component:<DashBoard/>
    },
    {
        name:"Add Vehicle",
        key:"Add Vehicle",
        path:"/addvehicle",
        component:<AddVehicle/>
    },
    {
        name:"Search Vehicle",
        key:"Search Vehicle",
        path:"/searchvehicle",
        component:<SearchVehicle/>
    },
    {
        name:"Show Vehicle",
        key:"Show Vehicle",
        path:"/showvehicle",
        component:<ShowVehicle/>
    },
]

export default routes;
