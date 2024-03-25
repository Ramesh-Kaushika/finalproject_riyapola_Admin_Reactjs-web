import CardCom from "../../components/CardCom/CardCom.jsx";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import instance from "../../services/Axios/AxiosOrder.jsx";
import {Route} from "react-router-dom";
import DialogCom2 from "../../components/DialogCom/DialogCom2.jsx";
import DialogCom, {DialogCom4} from "../../components/DialogCom/DialogCom.jsx";

export default function ShowVehicle() {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)


    const [upbrand, setUpBrand] = useState('')
    const [upmodel, setUpModel] = useState('')
    const [upvehicleNo, setUpVehicleNo] = useState('')
    const [upprice, setUpPrice] = useState('')
    const [updesc, setUpDesc] = useState('')
    const [upimage, setUpImage] = useState(null)

    useEffect(() => {
        instance.get('/vehicle')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);


    const deleteOnAction = (id) => {
        instance.delete('/vehicle/'+id)
            .then(response => {
                console.log(response.data);
                window.location.reload()
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });


    }

    const updateOnAction = (val) => {
        setOpen(true);
        console.log(val)
        // setUpdateid(val.row.id)
        // setSelectdata(val.row)
    }
    const cancelOnAction = () => {
        setOpen(false);
    }

    const submitOnAction = () => {
        console.log(selectdata.id)
        instance.put('/customer/'+selectdata.id,{
            // userId: 1,
            // id: 1,
            userName: updateusername,
            email: updatemail,
            password: updatepassword,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }

    return (
        <>

            <h1>Show Vehicle</h1>
            <Box sx={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-around' }}>
                {
                    data.map((val, index)=>(
                        <CardCom key={index}
                                 id={val.id}
                                 brand={val.brand}
                                 vehicleNo={val.vehicleNo}
                                 description={val.description}
                                 price={val.price} model={val.model}
                                 imageP={val.vehicleImage}
                                 onclick={() => deleteOnAction(val.id)}
                                 onclickUpdate={() => updateOnAction()}


                        />


                    ))
                }
                <DialogCom4
                    open={open}
                    handleClose={() => cancelOnAction()}
                    onclick={() => submitOnAction()}
                    onchangeBrand={(e) => setUpBrand(e.target.value)}
                    onchangeModel={(e) => setUpModel(e.target.value)}
                    onchangeVehicleNo={(e) => setUpVehicleNo(e.target.value)}
                    onchangePrice={(e) => setUpPrice(e.target.value)}
                    onchangeDescription={(e) => setUpDesc(e.target.value)}
                    onchangeUploadFile={(e) => setUpImage(e.target.files[0])}
                    uploadImage={upimage}

                />


            </Box>
        </>
    )
}
