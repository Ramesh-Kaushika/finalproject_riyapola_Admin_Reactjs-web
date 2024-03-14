import * as React from 'react';
import HelperTextAligned from "../../components/TextFields/TextField.jsx";
import BasicButtons, {ButtonCom} from "../../components/ButtonCom/ButtonCom.jsx";
import BadgeAvatars from "../../components/AvatarCom/AvatarCom.jsx";
import Link from '@mui/joy/Link';
import {Typography} from "@mui/material";
import './Login.css'

export default function Login() {
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
                    {/*<BadgeAvatars/>*/}
                    {/*<HelperTextAligned/>*/}
                    {/*<br/>*/}
                    {/*<BasicButtons/>*/}
                    {/*<br/>*/}
                    {/*<Link fontStyle={{color: 'black'}} fontSize={12} href="https://www.youtube.com/">Forget Password ?</Link>*/}
                    {/*<br/>*/}
                    {/*<ButtonCom/>*/}
                </div>
            </div>
        </div>

    );
}
