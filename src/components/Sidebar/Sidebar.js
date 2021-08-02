import React from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useStyles } from "./SidebarStyles";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid item lg={2} md={2}>
      <Grid container lg={12} md={12} className={classes.head}>
        <Typography>WIPADIKA INNOVATIONS</Typography>
      </Grid>
      <Grid
        container
        lg={12}
        md={12}
        style={{ marginTop: "10px" }}
        justify="center"
      >
        <Grid item lg={11} md={11}>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "15px",
          marginLeft: "10px",
          alignItems: "center",
        }}
        lg={12}
        md={12}
        className={classes.user}
      >
        <PermIdentityIcon style={{ marginRight: "10px" }} />{" "}
        <Typography variant="body2">USER PROFILE</Typography>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
