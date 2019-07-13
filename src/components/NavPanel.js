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
// import menuItems from './menuItems';


const useStyle = makeStyles(theme =>({
    list:{
        width: 250,
        padding: 0,
    },
    itemlogo: {
        height: 75
    },
    item: {
        height: 30
    },
    links: {
        textDecoration:'none',
    },
    menuHeader: {
        paddingLeft: '30px'
    },
    logo:{
        color: '#2196f3',

    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    nested: {
        paddingLeft: theme.spacing(4),
        height: 30
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
        <div>
            <List className={classes.list}>
                <ListItem button className={classes.itemlogo} divider>
                    <ListItemText primary={'O3'} className={classes.logo}/>
                </ListItem>
                <ListItem button className={classes.item} divider>
                    <ListItemText primary={'one'}/>
                </ListItem>
                <ListItem button onClick={handleClick} className={classes.item} divider id="sub1">
                    <ListItemText primary='twoo'/>
                    {open ? <ExpandMore/> : <ExpandLess/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} >
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
                <ListItem button className={classes.item} divider>
                    <ListItemText primary={'three'}/>
                </ListItem>
                <ListItem button onClick={handleClick} className={classes.item} divider id="sub2">
                    <ListItemText primary='twoo'/>
                    {open ? <ExpandMore/> : <ExpandLess/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
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
                <Drawer open={state.left} onClose={togglePanel('left', false)} className={classes.list}>
                    {/*{ handler( menuItems.data ) }{ handler( menuItems.data ) }*/}
                    {sideList('left')}
                    {/*{menuItems.data}*/}
                </Drawer>
            </div>
        )
    }

