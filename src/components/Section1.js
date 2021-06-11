import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import editorMobile from '../images/illustration-editor-mobile.svg'
import editorDesktop from '../images/illustration-editor-desktop.svg'

const useStyles = makeStyles((theme) => ({
    section1_mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "20%",
        backgroundColor: 'white',
        zIndex: "99",
        position: "relative",
        [theme.breakpoints.up('sm')]: {
            marginTop: "8%",
        }
    },
    desktopContainer: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: "row-reverse",
        }
    },
    desktopLeft: {
        [theme.breakpoints.up('sm')]: {
            marginTop: "5%",
        }
    },
    container: {
        textAlign: 'center',
        marginTop: "10%",
        paddingLeft: "10%",
        paddingRight: "10%",
        [theme.breakpoints.up('sm')]: {
            textAlign: "left",
            marginTop: "8%",
        }
    },
    titles: {
        color: "#1E3D5B",
    },
    para: {
        color: "#606266",
        marginTop: "5%"
    },
    editor: {
        marginTop: "10%",
        width: "100%",
        "& img": {
            width: "100%",
            [theme.breakpoints.up('sm')]: {
                transform: 'scale(2.5) translateX(15%)'
            }
        }
    }
}))

const Section1 = ({isDesktop}) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.section1_mainContainer}>
                <Typography className={classes.titles} variant={`${isDesktop ? "h4" : "h5"}`} component="h3">Designed for the future</Typography>
                <div className={classes.desktopContainer}>
                    <div className={classes.container}>
                        <div className={classes.editor}>
                            <img src={`${isDesktop ? editorDesktop : editorMobile}`} alt="Editor logo" />
                        </div>
                    </div>
                    <div className={classes.desktopLeft}>
                        <div className={classes.container}>
                            <Typography className={classes.titles}  variant="h5" component="h3">Introducing an extensible editor</Typography>
                            <Typography className={classes.para} variant="body1" component="p">
                                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                                change the looks of a blog.
                            </Typography>
                        </div>
                        <div className={classes.container}>
                            <Typography className={classes.titles}  variant="h5" component="h3"> Robust content management</Typography>
                            <Typography className={classes.para} variant="body1" component="p">
                                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                            </Typography>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Section1
