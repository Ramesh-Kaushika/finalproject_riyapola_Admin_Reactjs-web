import AddVehicle from "../../pages/AddVehicle/AddVehicle.jsx";
import SearchVehicle from "../../pages/SearchVehicle/SearchVehicle.jsx";
import ShowVehicle from "../../pages/ShowVehicle/ShowVehicle.jsx";


const routes =[
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
