import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    title: {
        paddingTop: 20,
    },
    button: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
        margin: theme.spacing(1),
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    root: {
        paddingTop: 64,
    },

}));


const Retention = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' className={classes.root}>
            <Typography variant='inherit' component='h1' align='center' className={classes.title}>
                Регламенты
            </Typography>
            <Box m={3} className={classes.main}>
                <Button className={classes.button} variant='contained'>Регламент №1 (Паузы)</Button>

            </Box>
        </Container>
    )

}

export default (Retention)