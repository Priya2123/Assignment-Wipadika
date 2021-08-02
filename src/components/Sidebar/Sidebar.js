import React from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";

const Sidebar = () => {
  return (
    <Grid container lg={12} md={12}>
      <Grid item lg={2} md={2}>
        <Grid container lg={12} md={12}>
          <Typography>WIPADIKA INNOVATIONS</Typography>
        </Grid>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
