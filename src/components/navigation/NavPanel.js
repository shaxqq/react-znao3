import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import logo from './logo.jpg';
import sidenav from './sidenav.jpg';
import {NavLink} from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    list: {
        width: 250,
        padding: 0,
        background: 'rgba(225, 240, 255, 0.8)',
        height: '100%',
    },
    item__logo: {
        height: 88,
        display: 'flex',
        justifyContent: 'center',
    },
    item: {
        height: 36
    },
    links: {
        textDecoration: 'none',
    },
    menuHeader: {
        paddingLeft: '30px'
    },
    logo: {
        color: '#2196f3',

    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    nested: {
        paddingLeft: theme.spacing(4),
        height: 30
    },
    bg__img: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${sidenav})`,
        backgroundRepeat: 'no-repeat',
    },
    list__active: {
        background: 'rgba(0, 0, 0, 0.14)',
    },
}));


export default function NavPanel() {
    const classes = useStyle();
    const [state, setState] = useState({left: false});
    const [open, setOpen] = useState(false);

    const togglePanel = (side, open) => e => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setState({state, [side]: open});
    };

    function handleClick() {
        setOpen(!open);
        // Expansion panels
    }

    const sideList = () => (
        <div className={classes.bg__img}>
            <List className={classes.list}>

                <ListItem button className={classes.item__logo} divider >
                    <img src={logo} alt=''/>
                </ListItem>

                <ListItem button className={classes.item} component={NavLink}
                          to="/reglaments" onClick={togglePanel(false)}>
                    <ListItemText primary={'Регламенты'}/>
                </ListItem>

                <ListItem button onClick={handleClick} className={classes.item} id="sub1">
                    <ListItemText primary='Обучение'/>
                    {open ? <ExpandMore/> : <ExpandLess/>}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit className={classes.list__active}>
                    <List component="div" disablePadding>

                        <ListItem button className={classes.nested}  component={NavLink}
                                  to="/retention" onClick={togglePanel(false)}>
                            <ListItemText primary="Удержание"/>
                        </ListItem>

                        <ListItem button className={classes.nested} onClick={togglePanel(false)}>
                            <ListItemText primary="Абон. отдел"/>
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={togglePanel(false)}>
                            <ListItemText primary="Тех. отдел"/>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button className={classes.item} onClick={togglePanel(false)}>
                    <ListItemText primary={'three'}/>
                </ListItem>
                <ListItem button onClick={handleClick} className={classes.item} id="sub2">
                    <ListItemText primary='twoo'/>
                    {open ? <ExpandMore/> : <ExpandLess/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit className={classes.list__active}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="One"/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Twoo"/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Three"/>
                        </ListItem>
                    </List>
                </Collapse>

            </List>
        </div>
    );

    return (
        <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit"
                        onClick={togglePanel('left', true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer open={state.left} onClose={togglePanel('left', false)}
            >
                {/*{handler(menuItems.data)} {handler(menuItems.data )}*/}
                {sideList('left')}
                {/*{menuItems.data}*/}
            </Drawer>

        </div>
    )
}

