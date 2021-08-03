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
  ListItemSecondaryAction,
  Avatar,
  TextField,
  Chip,
} from "@material-ui/core";
import { useStyles } from "./MainTopStyles";
import MailIcon from "@material-ui/icons/Mail";

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
        <Grid item lg={11} md={11} sm={11} xs={11}>
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
              <Grid item lg={1} md={1}>
                <img
                  className={classes.userimage}
                  src="http://wi-interview-before-1.s3-website.ap-south-1.amazonaws.com/assets/img/mike.jpg"
                  alt="User"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={7} md={7}>
                <Grid
                  container
                  style={{ textAlign: "center" }}
                  justify="center"
                >
                  <Grid item lg={2} md={2}>
                    <Typography className={classes.name}>Chet Faker</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={5} md={5}>
                <Grid container justify="center">
                  <Grid item lg={2} md={2}>
                    <Typography className={classes.sub} variant="caption">
                      @chetfaker
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={8} md={8}>
                <Grid container justify="center">
                  <Grid item lg={3} md={3} style={{ textAlign: "center" }}>
                    <Typography className={classes.sub} variant="caption">
                      "I like the way you work it
                      <br />
                      No diggity
                      <br />I wanna bag it up!
                    </Typography>
                  </Grid>
                </Grid>
                {/* <Grid container justify="center">
                  <Grid item lg={2} md={2}>
                    <Typography className={classes.sub} variant="caption">
                      No diggity
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid item lg={3} md={3}>
                    <Typography className={classes.sub} variant="caption">
                      I wanna bag it up"
                    </Typography>
                  </Grid>
                </Grid> */}
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
            <Grid container lg={12} md={12}>
              <List className={classes.root}>
                <ListItem>
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
                  <ListItemSecondaryAction>
                    <MailIcon edge="end" style={{ color: "lightgreen" }} />
                  </ListItemSecondaryAction>
                </ListItem>
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
                  <ListItemSecondaryAction>
                    <MailIcon edge="end" style={{ color: "lightgreen" }} />
                  </ListItemSecondaryAction>
                </ListItem>
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
                  <ListItemSecondaryAction>
                    <MailIcon edge="end" style={{ color: "lightgreen" }} />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
          </Paper>
          <Paper className={classes.formpaper}>
            <Grid container lg={12} md={12}>
              <Grid item style={{ marginLeft: "10px", marginTop: "10px" }}>
                <Typography variant="h6" className={classes.teamhead}>
                  Edit Profile
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item lg={11} md={11} sm={11} xs={11}>
                <Grid container>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Company (disabled)"
                      defaultValue="Code Inc."
                      variant="outlined"
                      style={{ width: "98%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    md={3}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="Username"
                      defaultValue="michael23"
                      variant="outlined"
                      style={{ width: "98%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="Email Address"
                      defaultValue=" "
                      placeholder="Email"
                      variant="outlined"
                      style={{ width: "98%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="First Name"
                      defaultValue="Chet"
                      variant="outlined"
                      style={{ width: "99%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="Last Name"
                      defaultValue="Faker"
                      variant="outlined"
                      style={{ width: "99%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="Address"
                      defaultValue="Melbourne, Australia"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="City"
                      defaultValue="Melbourne"
                      variant="outlined"
                      style={{ width: "99%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="Country"
                      defaultValue="Australia"
                      variant="outlined"
                      style={{ width: "99%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <TextField
                      id="filled-number"
                      label="Postal Code"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      style={{ width: "99%" }}
                      placeholder="ZIP Code"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    sm={12}
                    style={{ marginTop: "10px", marginBottom: "2%" }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="About me"
                      defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              lg={12}
              md={12}
              justify="center"
              style={{ marginBottom: "5%" }}
            >
              <Grid item lg={2} md={2}>
                <Chip label="Update Profile" className={classes.chip} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainTop;
