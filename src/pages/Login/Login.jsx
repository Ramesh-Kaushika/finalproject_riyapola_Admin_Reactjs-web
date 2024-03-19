import * as React from 'react';

import BasicButtons, {ButtonCom} from "../../components/ButtonCom/ButtonCom.jsx";
import BadgeAvatars from "../../components/AvatarCom/AvatarCom.jsx";
import {Typography} from "@mui/material";
import './Login.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff.js";
import Visibility from "@mui/icons-material/Visibility.js";
import instance from "../../services/Axios/AxiosOrder.jsx";
import Button from "@mui/material/Button";


export default function Login() {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const loginHandleClick = () => {
        instance.post('/admin/login', {
            email: loginEmail,
            password: loginPassword
        })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem('stToken',response.data.token)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className={'container'}>
            <div className={'set-image'}>
                <div className={'div-mod'} >

                    <Typography fontFamily={'-apple-system'}
                                variant="poster"
                                fontSize={45}
                                fontWeight={'bold'}

                    >Login</Typography>
                    <br/>
                    <Typography fontFamily={'-apple-system'}
                                variant="poster"
                                fontSize={12}
                                fontWeight={'bold'}
                    >Riyapola Admin Login:</Typography>
                    <br/><br/>
                    <BadgeAvatars/>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: 8,
                            '& > :not(style)': {m: 1},
                        }}
                    >
                        <TextField
                            helperText="Please enter your E-mail"
                            id="demo-helper-text-aligned"
                            label="E-maiil"
                            sx={{width: '25ch'}}
                            onChange={(e) => setLoginEmail(e.target.value)}

                        />
                        <br/>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                onChange={(e) => setLoginPassword(e.target.value)}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />

                        </FormControl>
                    </Box>
                    <br/>
                    <BasicButtons onclick={() => loginHandleClick()}/>

                    <br/>
                    <Link style={{textDecoration: "none",color: 'black'}}  fontSize={12} to="https://www.youtube.com/" >Forget Password ?</Link>
                    <br/>
                    <Link to={'/register'}>
                        <ButtonCom/>
                    </Link>

                </div>
            </div>
        </div>

    );
}
