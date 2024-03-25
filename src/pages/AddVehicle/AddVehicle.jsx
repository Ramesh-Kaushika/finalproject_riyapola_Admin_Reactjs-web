import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import DialogCom from "../../components/DialogCom/DialogCom.jsx";
import {useState} from "react";
import instance from "../../services/Axios/AxiosOrder.jsx";

export default function AddVehicle(){

    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [vehicleNo, setVehicleNo] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState(null)



    const submitOnAction = () => {
        if(brand !== '' && model !== '' && vehicleNo !== '' && price !== '' && desc !== ''){
           // const formData = new FormData();
           // formData.append(`image`,image)
            instance.post('/vehicle', {
                brand: brand,
                model: model,
                vehicleNo:vehicleNo,
                price:price,
                description:desc,
                image:image,

            })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });

        }else {
            alert("Please input all info")
        }

        setBrand("");
        setModel("");
        setPrice("");
        setDesc("");
        setVehicleNo("");
        setImage(null)
    }

    return(
        <div>
            <h1>Add Vehicle</h1>
            <DialogCom
            onchangeBrand={(e) => setBrand(e.target.value)}
            onchangeModel={(e) => setModel(e.target.value)}
            onchangeVehicleNo={(e) => setVehicleNo(e.target.value)}
            onchangePrice={(e) => setPrice(e.target.value)}
            onchangeDescription={(e) => setDesc(e.target.value)}
            onclick={() => submitOnAction()}
            onchangeUploadFile={(e) => setImage(e.target.files[0])}
            uploadImage={image}
            />
        </div>

    )
}
