import { AppBar, Container, Button, Typography, Hidden, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar } from '@material-ui/core'
import React, {useState} from 'react'
import logo from '../../images/logo.svg'
import SideDrawer from './SideDrawer'
import iconArrow from '../../images/icon-arrow-light.svg'

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none'
    },
    navContainer: {
        display: 'flex',
        justifyContent: "space-between",
        width: "100%"
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10%',
        [theme.breakpoints.up('sm')]: {
            marginTop: '1%',
          },
    },
    clickedArrow: {
        transform: 'rotate(180deg)'
    },
    list: {
        display: "flex",
        color: "white",
        marginLeft: "2%",
    },
    listItem: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    listItemText: {
        marginRight: "8px",
        fontWeight: "bold"
    },
    listItemTextHovered: {
        textDecoration: "underline"
    },
    drawerBottom: {
        display: "flex",
        alignItems: "center",
        width: "15%",
        justifyContent: "space-between"
    },
    login: {
        color: "white",
        cursor: "pointer"
    },
    signup: {
        cursor: "pointer",
        color: "hsl(356, 100%, 66%)",
        background: 'white',
        borderRadius: "50px",
        border: "none",
        textTransform: "capitalize",
        fontWeight: "bold",
        paddingLeft: "12%",
        paddingRight: "12%",
        transition: "all 300ms ease-in-out",
        "&:hover": {
            background: "hsl(355, 100%, 74%)",
            color: "white"
        }
    },
    subLinksContainer: {
        position: "absolute",
        background: "white",
        color: "black",
        borderRadius: "5px",
        padding: "8% 12% 8% 5%"
    },
    listItemSubLinks: {
        "&:hover": {
            backgroundColor: "transparent",
            color: "hsl(355, 100%, 74%)",
        }
    }
}))

const Header = () => {
    const classes = useStyles();
    const [navLinks, setNavLinks] = useState([
        {id: 1, title: 'Product'},
        {id: 2, title: 'Company'},
        {id: 3, title: 'Connect'},
    ])
    const [navSubLinks, setNavSubLinks] = useState([
        {id: 1, title: 'Contact'},
        {id: 2, title: 'Newsletter'},
        {id: 3, title: 'LinkedIn'},
    ])
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

    const handleHoverOut = () => {
        setLinkClickedId(0)
    }

    const hoverInSubMenu = (id) => {
        setLinkClickedId(id)
    }


    return (
        <AppBar className={classes.appBar} position="fixed" color="transparent">
            <Toolbar>
                <Container className={classes.headerContainer}>
                    <IconButton disableRipple edge="start" aria-label="home">
                        <div>
                            <img src={logo} alt="Logo"/>
                        </div>
                    </IconButton>
                    <Hidden smDown>
                        <div className={classes.navContainer}>
                            <List component="nav" className={classes.list}>
                                { 
                                    navLinks.map(({id, title}) => (
                                        <div>
                                            <ListItem className={classes.listItem} onMouseEnter={() => handleClickLink(id)} onMouseLeave={() => handleHoverOut()} disableRipple button key={id}>
                                                <ListItemText className={`${linkClickedId === id ? `${classes.listItemText} ${classes.listItemTextHovered}` : `${classes.listItemText}`}`} primary={title}></ListItemText>
                                                <img className={`${linkClickedId === id ? `${classes.clickedArrow}` : null}`} src={iconArrow} alt="iconArrow"/>
                                            </ListItem>
                                            {
                                                id === linkClickedId && 
                                                    <div className={classes.subLinksContainer} onMouseEnter={() => hoverInSubMenu(id)} onMouseLeave={() => handleHoverOut()}>
                                                        {
                                                            navSubLinks.map(({id, title}) => (
                                                                <div key={id}>
                                                                    <ListItem className={classes.listItemSubLinks} button>
                                                                        <ListItemText className={classes.listItemTextSubLinks} primary={title}></ListItemText>
                                                                    </ListItem>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                             }
                                        </div>    
                                    ))
                                }
                            </List>
                            <div className={classes.drawerBottom}>
                                <div className={classes.bar}></div>
                                    <Typography className={classes.login}>Login</Typography>
                                    <Button className={classes.signup}>Sign Up</Button>
                            </div>
                        </div>

                    </Hidden>
                    <Hidden mdUp>
                        <SideDrawer handleClickLink={handleClickLink} linkClickedId={linkClickedId} navLinks={navLinks} navSubLinks={navSubLinks}/>
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header
