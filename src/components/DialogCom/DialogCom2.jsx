import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from "@mui/icons-material/Add.js";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from "@mui/material/styles";
import {useState} from "react";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function DialogCom2({onchangePassword,open,data,onclick,onchangeEmail,onchangeUserName,onsubmitOnClick}) {




    return (
        <React.Fragment>
            <Dialog
                open={open}
                //onClose={handleClose}

            >
                <DialogTitle sx={{fontWeight: 'bold '}}>{data?.userName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        To adding form to this website, please enter information here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        onChange={onchangeEmail}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="E-mail"
                        label="E-mail"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        onChange={onchangeUserName}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="User Name"
                        label="User Name"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={onchangePassword}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="Password"
                        label="Password"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={onclick}>Cancel</Button>
                    <Button  onClick={onsubmitOnClick} type="submit">DONE</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export function DialogCom3({onchangeFirstName,onchangeLastName,onchangePassword,onchangeTelephoneNo,open,data,onclick,onchangeEmail,onsubmitOnClick}) {




    return (
        <React.Fragment>
            <Dialog
                open={open}
                //onClose={handleClose}

            >
                <DialogTitle sx={{fontWeight: 'bold '}}>{data?.userName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        To adding form to this website, please enter information here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        onChange={onchangeFirstName}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="First Name"
                        label="First Name"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        onChange={onchangeLastName}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="Last Name"
                        label="Last Name"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        onChange={onchangeEmail}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="E-mail"
                        label="E-mail"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        onChange={onchangeTelephoneNo}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="Telephone Number"
                        label="Telephone Number"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={onchangePassword}
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="Password"
                        label="Password"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={onclick}>Cancel</Button>
                    <Button  onClick={onsubmitOnClick} type="submit">DONE</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
