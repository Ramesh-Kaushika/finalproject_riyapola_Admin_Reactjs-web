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

export default function DialogCom() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button  onClick={handleClickOpen} startIcon={<AddIcon />} sx={{backgroundColor: '#d63031',color: 'balck'}} variant="contained">Add Vehicle</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle sx={{fontWeight: 'bold '}}>Vehicle Adding Form</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To adding form to this website, please enter information here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="Brand"
                        label="Brand"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="Model"
                        label="Model"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        // id="name"
                        name="Vehicle Number"
                        label="Vehicle Number"
                        // type="email"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="Price"
                        label="Price"
                        fullWidth
                        variant="standard"
                    />
                    <br/>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="Description"
                        label="Description"
                        fullWidth
                        variant="standard"
                    />
                    <br/><br/>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">DONE</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
