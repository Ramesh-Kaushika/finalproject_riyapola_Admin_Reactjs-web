import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const columns = [
    {   field: 'id',
        headerName: 'ID',
        headerClassName: 'super-app-theme--header',
        width: 90
    },
    {
        field: 'userName',
        headerName: 'User Name',
        headerClassName: 'super-app-theme--header',
        width: 150,

    },
    {
        field: 'email',
        headerName: 'E-mail',
        headerClassName: 'super-app-theme--header',
        width: 150,

    },
    {
        field: 'password',
        headerName: 'Password',
        headerClassName: 'super-app-theme--header',
        type: 'number',
        width: 110,

    },
    {
        field: 'Action Updtae',
        headerName: 'Action Updtae',
        headerClassName: 'super-app-theme--header',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) =>
            <IconButton aria-label="delete" size="large" color="error">
                <DeleteIcon fontSize="inherit" />
            </IconButton>,
    },
    {
        field: 'Action Delete',
        headerName: 'Action Delete',
        headerClassName: 'super-app-theme--header',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) =>
            <IconButton aria-label="delete" size="large" color="secondary">
                <EditIcon fontSize="inherit" />
            </IconButton>,
    },
];

const rows = [
    { id: 1, userName: 'Snow', email: 'Jon', password: 14 },
    { id: 1, userName: 'Snow', email: 'Jon', password: 14 },

];
export default function DashBoard() {

    const [row, setRow] = useState([])

    return(
        <div>
            <h1>DashBoard</h1>
            <Box sx={{ height: 400, width: '100%',
                '& .super-app-theme--header': {
                    backgroundColor: 'rgba(255, 7, 0, 0.55)',
                },
            }}>
                <DataGrid
                    rows={rows}
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
        </div>


    )

}
