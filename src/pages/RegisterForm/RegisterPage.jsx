import * as React from 'react';
import './RegisterStyle.css'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {ButtonCom, ButtonCom2} from "../../components/ButtonCom/ButtonCom.jsx";

export default function RegisterPage() {
    return (
        <div className={'main-img'}>
            <div className={'reg-container'}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <Typography fontFamily={'-apple-system'}
                                    variant="poster"
                                    fontSize={30}
                                    fontWeight={'bold'}
                                    fontStyle={{color: 'black'}}
                        >Riyapola Admin Register      Form</Typography>
                    </div>
                    <br/><br/><br/>
                    <div className={'text-mod'}>
                        <TextField
                            id="standard-textarea"
                            label="E-mail"
                            placeholder="Enter E-mail"
                            multiline
                            variant="standard"
                        />
                        <br/><br/>
                        <TextField
                            id="standard-textarea"
                            label="User Name"
                            placeholder="Enter User Name"
                            multiline
                            variant="standard"
                        />
                        <br/><br/>
                        <TextField
                            id="standard-textarea"
                            label="Password"
                            placeholder="Enter Password"
                            multiline
                            variant="standard"
                        />

                    </div>
                </Box>
                <br/><br/>
                <div>
                    <ButtonCom2/>
                </div>
            </div>
        </div>


    );
}
