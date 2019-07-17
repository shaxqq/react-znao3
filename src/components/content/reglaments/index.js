import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";



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


const Reglaments = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' className={classes.root}>
            <Typography variant='inherit' component='h1' align='center' className={classes.title}>
                Регламенты
            </Typography>
            <Box m={3} className={classes.main}>
                <Button className={classes.button} variant='contained' href='reglament1'>Регламент №1 (Паузы)</Button>
                <Button className={classes.button} variant='contained'>Регламент №2 (Робота старшого зміни та
                    спеціаліста з технічної підтримки)</Button>
                <Button className={classes.button} variant='contained'>Регламент №3 (Відпочинок і харчування)</Button>
                <Button className={classes.button} variant='contained'>Регламент №4 (Iдентифікація користувача)</Button>
                <Button className={classes.button} variant='contained'>Регламент №5 (Опрацювання звернень від
                    абонентів)</Button>
                <Button className={classes.button} variant='contained'>Регламент №6 (Взаємодія операторів 1-ї та 2-ї
                    лінії)</Button>
                <Button className={classes.button} variant='contained'>Регламент №7 (Фіксація звернень від
                    абонентів)</Button>
                <Button className={classes.button} variant='contained'>Регламент №8 (Якість обслуговування
                    абонентів)</Button>
            </Box>
        </Container>
    )
}

export default (Reglaments)