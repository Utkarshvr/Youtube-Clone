import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export default function VideosWrapper({ children }) {
  return (
    <Grid container m={0} spacing={{ xs: 1, sm: 2 }}>
      {children}
    </Grid>
  );
}

export const VideoContainer = ({ children }) => (
  <Grid xs={12} sm={6} md={4}>
    {children}
  </Grid>
);
