import * as React from 'react';
import './RegisterStyle.css'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {useState} from "react";
import instance from "../../services/Axios/AxiosOrder.jsx";
import {ButtonCom2} from "../../components/ButtonCom/ButtonCom.jsx";
import {Link} from "react-router-dom";




export default function RegisterPage() {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const registerHandle = () =>{
        if(userName !== '' && password !== '' && email !== ''){
            instance.post('/admin/register', {
                userName: userName,
                email: email,
                password:password,
            })
                .then(function (response) {
                    console.log(userName);
                    console.log(email);
                    console.log(password);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }else {
            alert("Please input all info")
        }

        setEmail("");
        setPassword("");
        setUserName("");
    }

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
                            value={email}
                            id="standard-textarea"
                            label="E-mail"
                            placeholder="Enter E-mail"
                            multiline
                            variant="standard"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/><br/>
                        <TextField
                            value={userName}
                            id="standard-textarea"
                            label="User Name"
                            placeholder="Enter User Name"
                            multiline
                            variant="standard"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <br/><br/>
                        <TextField
                            value={password}
                            id="standard-textarea"
                            label="Password"
                            placeholder="Enter Password"
                            multiline
                            variant="standard"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                </Box>
                <br/><br/>
                <div>
                    <Link to={'/login'}>
                        <ButtonCom2 onclick={() => registerHandle()}/>
                    </Link>


                </div>
            </div>
        </div>


    );
}
