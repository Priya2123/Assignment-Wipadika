import React from "react";
import {
  Divider,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { useStyles } from "./MainTopStyles";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const MainTop = () => {
  const classes = useStyles();
  return (
    <Grid item lg={10} md={10} style={{ backgroundColor: "#fffaf0" }}>
      <Grid container justify="flex-end">
        <Typography variant="body2" style={{ color: "Gray" }}>
          Search...
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={11} md={11}>
          <Paper className={classes.paper}>
            {" "}
            <Grid container justify="center">
              <Grid item lg={12} md={12}>
                <img
                  className={classes.image}
                  src="http://wi-interview-before-1.s3-website.ap-south-1.amazonaws.com/assets/img/damir-bosnjak.jpg"
                  alt="Image"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={2} md={2}>
                <img
                  className={classes.userimage}
                  src="http://wi-interview-before-1.s3-website.ap-south-1.amazonaws.com/assets/img/mike.jpg"
                  alt="User"
                />
              </Grid>
            </Grid>
            <Grid
              container
              style={{ alignItems: "center", justifyContent: "center" }}
              justify="center"
            >
              <Grid item lg={2} md={2}>
                <Typography className={classes.name}>Chet Faker</Typography>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={2} md={2}>
                <Typography className={classes.sub} variant="caption">
                  @chetfaker
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={3} md={3}>
                <Typography className={classes.sub} variant="caption">
                  "I like the way you work it <br /> No diggity <br /> I wanna
                  bag it up"
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={11} md={11}>
                <Divider />
              </Grid>
            </Grid>
            <Grid container justify="space-around">
              <Grid item>
                <Typography className={classes.text} variant="caption">
                  12 <br /> Files
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text} variant="caption">
                  2GB <br /> Used
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text} variant="caption">
                  24.6$ <br /> Spent
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.teampaper}>
            <Grid container>
              <Grid item style={{ marginLeft: "10px", marginTop: "10px" }}>
                <Typography className={classes.teamhead} variant="h6">
                  Team Members
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <List className={classes.root}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="http://wi-interview-before-1.s3-website.ap-south-1.amazonaws.com/assets/img/faces/ayo-ogunseinde-2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="DJ Khaled"
                    style={{ color: "gray" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="caption"
                          className={classes.inline}
                          style={{ color: "lightgray" }}
                        >
                          Offline
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <PermIdentityIcon edge="end" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Wipadika Innovations"
                      src="http://wi-interview-before-1.s3-website.ap-south-1.amazonaws.com/assets/img/faces/joe-gardner-2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Wipadika Innovations"
                    style={{ color: "gray" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          style={{ color: "lightgreen" }}
                        >
                          Available
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="http://wi-interview-before-1.s3-website.ap-south-1.amazonaws.com/assets/img/faces/clem-onojeghuo-2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Flume"
                    style={{ color: "gray" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          style={{ color: "red" }}
                        >
                          Busy
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainTop;
