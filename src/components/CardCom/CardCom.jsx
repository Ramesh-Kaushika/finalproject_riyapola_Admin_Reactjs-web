import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',

    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',

    },
};

export default function CardCom({open,onclickUpdate,onclick,id, brand, model, vehicleNo, price, description, imageP}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card open={open}
            sx={{maxWidth: 345, margin: 1}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                        {id}
                    </Avatar>
                }
                title={brand}
                subheader={model}
            />
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />


            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography>
                    {vehicleNo}
                </Typography>
                <ThemeProvider theme={theme}>
                    <Typography sx={{justifyContent: 'center'}} variant="h3">${price}</Typography>
                </ThemeProvider>
            </CardContent>
            <CardActions disableSpacing sx={{justifyContent: 'space-evenly'}}>
                <Button
                    onClick={onclickUpdate} variant="contained" color="success">
                    UPDATE
                </Button>
                <Button onClick={onclick} variant="contained" color="error">
                    DELETE
                </Button>
            </CardActions>
        </Card>
    );
}
