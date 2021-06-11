import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import phones from '../images/illustration-phones.svg'
import bgCircles from '../images/bg-pattern-circles.svg'

const useStyles = makeStyles((theme) => ({
    section2_mainContainer: {
        marginTop: "20%",
        paddingBottom: "20%",
        paddingLeft: "10%",
        paddingRight: "10%",
        textAlign: 'center',
        position: "relative",
        backgroundColor: 'hsl(237, 17%, 21%)',
        borderRadius: "0 0 0 100px",
        // backgroundImage: `url(${bgCircles})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: 'center',
        // backgroundSize: '200% 150%',
        [theme.breakpoints.up('sm')]: {
            marginTop: "8%",
        }
    },
    bgCircles: {
        position: "absolute",
        zIndex: "80",
        width: "100%",
        transform: 'scale(1.8)',
        "& img": {
            width: "100%",
        }
    },
    backgroundWhite: {
        position: "absolute",
        zIndex: "99",
        backgroundColor: "white",
        width: "100%",
        height: "30%",
        left: "0",
        top: "-10%",
        "&:after": {
            content: '""',
            backgroundColor: "white",
            position: "absolute",
            zIndex: "98",
            width: "60px",
            height: "65px",
            right: "0",
            top: "100%"
        },
        "&:before": {
            content: '""',
            backgroundColor: '#3E4164',
            position: "absolute",
            zIndex: "99",
            width: "60px",
            height: "65px",
            right: "0",
            top: "100%",
            borderRadius: "0 100px 0 0"
        }
    },
    titles: {
        position: "relative",
        zIndex: "99",
        color: "hsl(0, 0%, 100%)",
    },
    para: {
        color: "hsl(0, 0%, 100%)",
        marginTop: "5%"
    },
    phones: {
        position: 'relative',
        zIndex: "99",
        width: "100%",
        "& img": {
            width: "100%",
        }
    }

}))


const Section2 = ({isDesktop}) => {
    const classes = useStyles()
    return (
        <>
          <div className={classes.section2_mainContainer}>
            <div className={classes.backgroundWhite}>

            </div>
            <div className={classes.bgCircles}>
                <img src={bgCircles} alt="Phones image" />
            </div>
            <div className={classes.phones}>
                <img src={phones} alt="Phones image" />
            </div>
            <div className={classes.textes}>
                <Typography className={classes.titles} variant={`${isDesktop ? "h4" : "h5"}`} component="h3">State of the Art Infrastructure</Typography>
                <Typography className={classes.para} variant="body1" component="p">  
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </Typography>
                {/* TODO : rogner image png */}
            </div>
          </div>
        </>
    )
}

export default Section2
