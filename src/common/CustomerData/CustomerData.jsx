import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import instance from "../../services/Axios/AxiosOrder.jsx";
import {DialogCom3} from "../../components/DialogCom/DialogCom2.jsx";





export default function CustomerData() {

    const [open, setOpen] = useState(false);
    const [selectdata, setSelectdata] = useState();
    const [upfirstName, setUpfirstName] = useState('')
    const [uplastName, setUplastName] = useState('')
    const [upemail, setUpemail] = useState('')
    const [upTeleNo, setUpTeleNo] = useState('')
    const [upPassword, setUpPassword] = useState('')


    const submitOnAction = () => {
        console.log(selectdata.id)
        instance.put('/customer/'+selectdata.id,{
            firstName: upfirstName,
            lastName: uplastName,
            email: upemail,
            telephoneNo: upTeleNo,
            password: upPassword,
        })
            .then((response) => {
                console.log(response.data);
                window.location.reload()
            })
            .catch((error) => {
                console.error(error);
            });

        setUpfirstName("");
        setUplastName("");
        setUpemail("");
        setUpPassword("");
        setUpTeleNo("");
    }


    const updateOnAction = (val) => {
        setOpen(true);
        console.log(val.row.id)
        setUpdateid(val.row.id)
        setSelectdata(val.row)
    }

    const [updateid, setUpdateid] = useState();

    const cancelOnAction = () => {
        setOpen(false);
    }

    const columns = [
        {   field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 150,

        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 150,

        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 150,

        },
        {
            field: 'telephoneNo',
            headerName: 'Telephone Number',
            width: 150,

        },
        {
            field: 'password',
            headerName: 'Password',
            width: 150,

        },

        {
            field: 'Action Updtae',
            headerName: 'Action Updtae',
            width: 90,
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            renderCell: (params) =>
                <IconButton onClick={() => deleteOnAction(params.row.id)} aria-label="delete" size="large" color="error">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>,
        },
        {
            field: 'Action Delete',
            headerName: 'Action Delete',

            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 90,
            renderCell: (params) =>
                <IconButton onClick={() => updateOnAction(params)} aria-label="delete" size="large" color="secondary">
                    <EditIcon fontSize="inherit" />
                </IconButton>,
        },
    ];

    const deleteOnAction = (id) => {
        instance.delete('/customer/'+id)
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


    const [row, setRow] = useState([])


    useEffect(() => {
        instance.get('/customer/all_customers')
            .then(function (response) {
                // handle success
                const array =[]
                response.data?.map((val)=>{
                    array.push({
                        id: val.id,
                        firstName: val.firstName,
                        lastName: val.lastName,
                        email: val.email,
                        telephoneNo: val.telephoneNo,
                        password: val.password,

                    })
                })
                setRow(array)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);



    return(
        <div>
            <h1>Customer Data</h1>
            <Box >
                <DataGrid
                    rows={row}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
            <DialogCom3
                onclick={() => cancelOnAction()}
                open={open}
                data={selectdata}
                handleClose={() => updateOnAction()}
                onchangeFirstName={(e) => setUpfirstName(e.target.value)}
                onchangeLastName={(e) => setUplastName(e.target.value)}
                onchangeEmail={(e) => setUpemail(e.target.value)}
                onchangePassword={(e) => setUpPassword(e.target.value)}
                onchangeTelephoneNo={(e) => setUpTeleNo(e.target.value)}
                onsubmitOnClick={() => submitOnAction()}
            />


        </div>


    )

}
