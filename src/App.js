import React from "react";
import { Sidebar, MainTop } from "./components";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container lg={12} md={12}>
      <Sidebar />
      <MainTop />
    </Grid>
  );
};

export default App;
