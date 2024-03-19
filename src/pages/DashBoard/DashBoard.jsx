import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import instance from "../../services/Axios/AxiosOrder.jsx";
import DialogCom2 from "../../components/DialogCom/DialogCom2.jsx";




export default function DashBoard() {

    const [open, setOpen] = useState(false);
    const [selectdata, setSelectdata] = useState();
    const [updatemail, setUpdatemail] = useState('')
    const [updateusername, setUpdateusername] = useState('')
    const [updatepassword, setUpdatePassword] = useState('')


    const submitOnAction = () => {
        console.log(selectdata.id)
        instance.put('/admin/'+selectdata.id,{
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
            field: 'userName',
            headerName: 'User Name',
            width: 150,

        },
        {
            field: 'email',
            headerName: 'E-mail',
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

            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
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
            width: 160,
            renderCell: (params) =>
                <IconButton onClick={() => updateOnAction(params)} aria-label="delete" size="large" color="secondary">
                    <EditIcon fontSize="inherit" />
                </IconButton>,
        },
    ];

    const deleteOnAction = (id) => {
        instance.delete('/admin/'+id)
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
        instance.get('/admin')
            .then(function (response) {
                // handle success
                const array =[]
                response.data?.map((val)=>{
                    array.push({
                        id: val.id,
                        userName: val.userName,
                        email: val.email,
                      //  password: val.password,

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
            <h1>DashBoard</h1>
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
            <DialogCom2
                onclick={() => cancelOnAction()}
                open={open}
                data={selectdata}
                handleClose={() => updateOnAction()}
                onchangeEmail={(e) => setUpdatemail(e.target.value)}
                onchangeUserName={(e) => setUpdateusername(e.target.value)}
                onchangePassword={(e) => setUpdatePassword(e.target.value)}
                onsubmitOnClick={() => submitOnAction()}
            />

        </div>


    )

}
