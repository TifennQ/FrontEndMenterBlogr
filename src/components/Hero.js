import { makeStyles } from '@material-ui/core'
import React from 'react'
import bgPattern from '../images/bg-pattern-intro.svg'

const useStyles = makeStyles((them) => ({
    bgImageContainer: {
        background: 'linear-gradient(bottom right, hsl(353, 100%, 62%), hsl(13, 100%, 72%))',
        borderBottomLeftRadius: '50px',
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        transform: 'scale(2.5)'
    }
}))

const Hero = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.bgImageContainer}>
            <img className={classes.bgImage} src={bgPattern} alt="Mobile Hero"/>
        </div>
        </>
    )
}

export default Hero
