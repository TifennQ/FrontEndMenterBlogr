import { AppBar, Container, Hidden, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar } from '@material-ui/core'
import React, {useState} from 'react'
import logo from '../../images/logo.svg'
import SideDrawer from './SideDrawer'

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none'
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10%'
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
                        <List component="nav" >
                            { 
                                navLinks.map(({id, title}) => (
                                        <ListItem disableRipple button key={id}>
                                            <ListItemText primary={title}></ListItemText>
                                        </ListItem>
                                ))
                            }
                        </List>
                    </Hidden>
                    <Hidden mdUp>
                        <SideDrawer navLinks={navLinks} navSubLinks={navSubLinks}/>
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header
