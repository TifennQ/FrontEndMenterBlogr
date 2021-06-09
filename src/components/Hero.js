import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import bgPattern from '../images/bg-pattern-intro.svg'

const useStyles = makeStyles((theme) => ({
    bgImageContainer: {
        background: 'linear-gradient(bottom right, hsl(353, 100%, 62%), hsl(13, 100%, 72%))',
        borderBottomLeftRadius: '50px',
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        transform: 'scale(3)',
        zIndex: "80",
        position: "relative",
        [theme.breakpoints.up('sm')]: {
            transform: "scale(2) translateY(-15%) translateX(15%)"
        }
    },
    heroContainer: {
        zIndex: "99",
        position: "relative",
        marginTop: "-50%",
        marginBottom: "35%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 8% 0 8%",
        "& h1": {
            marginBottom: "5%"
        },
        "& h2": {
            marginBottom: "10%"
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: "-85%",
            marginBottom: "10%"
        }
    },
    heroPara: {
        color: "white"
    },
    heroButtons: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.up('sm')]: {
            width: "30%"
        },
        "& span": {
            textTransform: "capitalize",
            fontWeight: "bold"
        },
        "& button": {
            borderRadius: "50px",
            paddingTop: "5%",
            paddingBottom: "5%",
            transition: "all 300ms ease-in-out",
            [theme.breakpoints.up('sm')]: {
                paddingTop: "2%",
                paddingBottom: "2%",
            }
        },
        "& button:first-child": {
            backgroundColor: "white",
            color: "hsl(356, 100%, 66%)",
            [theme.breakpoints.up('sm')]: {
                "&:hover": {
                    color: "white",
                    background: "hsl(355, 100%, 74%)"
                }
            }
        },
        "& button:last-child": {
            borderColor: "white",
            color: "white",
            [theme.breakpoints.up('sm')]: {
                "&:hover": {
                    background: "white",
                    color: "hsl(355, 100%, 74%)"
                }
            }
        }

    }
}))

const Hero = ({isDesktop}) => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.bgImageContainer}>
            <img className={classes.bgImage} src={bgPattern} alt="Mobile Hero"/>
            <div className={classes.heroContainer}>
                <div className={classes.heroPara}>
                    <Typography variant={`${isDesktop ? "h2" : "h4"}`}  component="h1">A modern publishing platform</Typography>
                    <Typography variant="body2" component="h2">Grow your audience and build your online brand</Typography>
                </div>
                <div className={classes.heroButtons}>
                    <Button variant="contained">Start for Free</Button>
                    <Button variant="outlined">Learn More</Button>
                </div>
        </div>
        </div>

        </>
    )
}

export default Hero
