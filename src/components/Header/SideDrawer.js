import { Drawer, makeStyles, List, ListItem, ListItemText } from '@material-ui/core'
import React, {useState, useRef} from 'react'
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
        height: 'auto',
        borderRadius: '8px'
    },
    clickedArrow: {
        transform: 'rotate(180deg)'
    },
    selectedText: {
        color: "#617486"
    },
    subLinksContainer: {
        backgroundColor: "#EFEFF1",
        color: "#617486",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: '5px',
        paddingTop: "5%",
        paddingBottom: "5%",
    },
    bar: {
        width: "80%",
        height: "1px",
        backgroundColor: "#EFEFF1",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "5%"
    },
    drawerBottom: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    signup: {
        cursor: "pointer",
        color: "white",
        background: 'linear-gradient(bottom right, hsl(353, 100%, 62%), hsl(13, 100%, 72%))',
        borderRadius: "50px",
        border: "none",
        padding: "5% 10% 5% 10%",
        marginBottom: "10%"
    }
}))


const SideDrawer = ({navLinks, navSubLinks}) => {
    const classes = useStyles()
    const [state, setState] = useState({ left: false })
    const [linkClickedId, setLinkClickedId] = useState(0)
    const handleClickLink = (id) => {
        if(id === linkClickedId) {
            setLinkClickedId(0)

        }
        else {
            setLinkClickedId(id)
            //add transition
        }
    }


    const sideDrawerList = anchor => (
        <div
            className={classes.drawer}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.drawerList} component="nav">
                {navLinks.map(({id, title}) => (
                    <div onClick={() => handleClickLink(id, "anchor")} className={classes.links} key={id}>
                        <ListItem disableRipple className={classes.listItem} button>
                            <ListItemText className={`${linkClickedId === id ? `${classes.listItemText} ${classes.selectedText}` : `${classes.listItemText}` }`}  primary={title}></ListItemText>
                            <img className={`${linkClickedId === id ? `${classes.clickedArrow}` : null}`} src={iconArrow} alt="iconArrow"/>
                        </ListItem>
                        {
                            id === linkClickedId && 
                            <div className={classes.subLinksContainer} onClick={toggleDrawer(anchor, false)}>
                                {
                                    navSubLinks.map(({id, title}) => (
                                        <div key={id}>
                                            <ListItem className={classes.listItem} button>
                                                <ListItemText className={classes.listItemText} primary={title}></ListItemText>
                                            </ListItem>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))}
            </List>
        </div>
    )

    const toggleDrawer = (anchor, open) => (event) => {
        console.log(event)
        if ((event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <>
            <img onClick={toggleDrawer("left", true)} className={classes.logoImage} src={`${state.left ? `${iconClose}` : `${burgerMenu}` }`} alt="Mobile burger menu"/>
            <Drawer anchor="left" open={state.left} onOpen={toggleDrawer("left", true)} classes={{ paper: classes.paper}} onClose={toggleDrawer("left", false)}>
                {sideDrawerList("left")}
                <div className={classes.drawerBottom}>
                    <div className={classes.bar}></div>
                    <p className={classes.login}>Login</p>
                    <button className={classes.signup}>Sign Up</button>
                </div>

            </Drawer>
        </>
    )
}

export default SideDrawer
