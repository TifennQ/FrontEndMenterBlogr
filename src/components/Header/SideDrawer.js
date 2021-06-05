import { Drawer, makeStyles, List, ListItem, ListItemText } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import burgerMenu from '../../images/icon-hamburger.svg'
import iconClose from '../../images/icon-close.svg'
import iconArrow from '../../images/icon-arrow-dark.svg'

const useStyles = makeStyles((theme) => ({
    logoImage: {
        cursor: "pointer",
        zIndex: '99'
    },
    drawer: {
        // margin: 'auto',
        marginTop: '2vh'
    },
    drawerList: {

    },
    links: {

    },
    listItem: {
        justifyContent: 'center'
    },
    listItemText: {
        flex: '0 1 auto',
        marginRight: '10px',
        fontWeight: 'bold'
    },
    paper: {
        top: '18vh',
        left: '10vw',
        width: '80vw',
        height: '70vh',
        borderRadius: '8px'
    },
    clickedArrow: {
        transform: 'rotate(180deg)'
    }
}))


const SideDrawer = ({navLinks}) => {
    const classes = useStyles()
    const [state, setState] = useState({ left: false })
    const [linkClickedId, setLinkClickedId] = useState(0)
    const handleClickLink = (id) => {
        setLinkClickedId(id)
    }

    const sideDrawerList = anchor => (
        <div
            className={classes.drawer}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.drawerList} component="nav">
                {navLinks.map(({id, title}) => (
                    <div onClick={() => handleClickLink(id, "anchor")} className={classes.links} key={id}>
                        <ListItem className={classes.listItem} button>
                            <ListItemText className={classes.listItemText} primary={title}></ListItemText>
                            <img className={`${linkClickedId === id ? `${classes.clickedArrow}` : null}`} src={iconArrow} alt="iconArrow"/>
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    )

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <>
            <img onClick={toggleDrawer("left", true)} className={classes.logoImage} src={`${state.left ? `${iconClose}` : `${burgerMenu}` }`} alt="Mobile burger menu"/>
            <Drawer anchor="left" open={state.left} onOpen={toggleDrawer("left", true)} classes={{ paper: classes.paper}} onClose={toggleDrawer("left", false)}>
                {sideDrawerList("left")}
            </Drawer>
        </>
    )
}

export default SideDrawer
