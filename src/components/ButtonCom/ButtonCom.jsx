import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export default function BasicButtons() {
    return (
        <Box  style={{alignItems: "center"
            }}>

            <Button variant="contained">LOGIN</Button>


        </Box>
    );
}

export function ButtonCom() {
    return (

        <Button  sx={{ width: 160, height: 25,fontSize: 10, }} variant="contained" color="success">
            CREATE NEW ACCOUNT
        </Button>

    );
}

export function ButtonCom2() {
    return (

        <Button  sx={{ width: 120, height: 30,fontSize: 18,fontFamily: '"Segoe UI Symbol"',}} variant="contained" color="success">
            SIGN UP
        </Button>

    );
}
