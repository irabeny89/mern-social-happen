import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import passionImg from '../assets/images/passion-led-us-here.jpg'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 400
  }
}))

export default function Home({ history }) {
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(() => {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen(() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

  return (
    <div className={classes.root}>
      { !defaultPage &&
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <Typography variant="h6" className={classes.title}>
                Home Page
                </Typography>
              <CardMedia className={classes.media} image={passionImg} title="passion led us here" />
              <CardContent>
                <Typography type="body1" component="p">
                  Welcome to the Happen social home page.
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
      {defaultPage &&
        <Grid container spacing={8}>
          <Grid item xs={8} sm={7}>
            <Newsfeed />
          </Grid>
          <Grid item xs={6} sm={5}>
            <FindPeople />
          </Grid>
        </Grid>
      }
    </div>
  )
}
