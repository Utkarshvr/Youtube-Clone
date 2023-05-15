import { Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const VideosInSkeletonView = () => (
  <Stack minWidth="240px" spacing={1}>
    <Skeleton variant="rectangular" width="100%" height={195} />
    <Stack minHeight={100} p={1} spacing={1} direction="row">
      <Stack alignItems="flex-start">
        <Skeleton variant="circular" width={40} height={40} />
      </Stack>
      <Stack width="100%" spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="40%" />
      </Stack>
    </Stack>
  </Stack>
);

export default function LoadingScreen() {
  return (
    <Grid container m={0} spacing={{ xs: 1, sm: 2 }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <Grid xs={12} sm={6} md={4}>
          <VideosInSkeletonView />
        </Grid>
      ))}
    </Grid>
  );
}

/* <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop> */
