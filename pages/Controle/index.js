import React from "react";
import { withIronSession } from "next-iron-session";
import { useRouter } from 'next/router';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox,Link ,Grid,Box, Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {AppBar,Toolbar,Typography,Button,IconButton,Icon} from '@material-ui/core';


const PrivatePage = ({ user }) => (
    
  <div>
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    <Icon color="primary" style={{fontSize:"10rem"}}>facebook</Icon>
    <Icon color="primary" style={{fontSize:"10rem"}}>ondemand_video</Icon>

    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>

  </div>
);

export const getServerSideProps = withIronSession(

  
  async ({ req, res }) => {
    const user = req.session.get("user");
    if (!user) {
      res.setHeader("location", "/Controle/login");
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    return {
      props: { user }
    };
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);

export default PrivatePage;