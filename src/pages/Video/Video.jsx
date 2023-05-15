import { Stack, Skeleton, Typography, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import VideoCard from "../../components/Videos/VideoCard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../services/youtubeAPI";
import ChannelName from "../../components/Channel/components/ChannelName";
import ReactPlayer from "react-player";

const SuggestedVideoCardInSkeletonView = () => (
  <Stack width="100%" spacing={1}>
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

const VideoCardInSkeletonView = () => (
  <>
    <Skeleton variant="rectangular" sx={{ height: { xs: 200, md: 450 } }} />
    <Stack spacing={2}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Stack direction="row" justifyContent="space-between">
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="20%" />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="40%" />
      </Stack>
    </Stack>
  </>
);

export default function Video() {
  const [video, setVideo] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null);
  const [isBuffering, setIsBuffering] = useState(false);

  const { videoID } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoID}`).then((data) =>
      setVideo(data.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${videoID}&type=video`
    ).then((data) => setSuggestedVideos(data.items));
  }, [videoID]);

  if (!video?.snippet)
    return (
      <Stack width="100%" height="100%" position="relative">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Stack>
    );

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;
  return (
    <Grid
      container
      width="100%"
      height={{ xs: "94vh", md: "92vh" }}
      sx={{ overflowY: "auto", boxSizing: "content-box" }}
      justifyContent="space-between"
      spacing={2}
      m={0}
    >
      <Grid
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          bgcolor: "background.paper",
          zIndex: 2,
        }}
        xs={12}
        md={8}
        spacing={1}
      >
        <Stack
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            bgcolor: "background.paper",
          }}
        >
          {video ? (
            <>
              <Box sx={{ height: { xs: 200, md: 450 }, width: "100%" }}>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={`https://www.youtube.com/watch?v=${videoID}`}
                  className="react-player"
                  controls
                />
              </Box>
              <Stack width="100%" spacing={1} p={1}>
                <Typography fontSize={18} fontWeight="medium">
                  {title}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link to={`/channel/${channelId}`}>
                    <ChannelName name={channelTitle} verified={true} />
                  </Link>
                  <Typography fontSize={14} color="gray">
                    {parseInt(likeCount).toLocaleString()} likes{" "}
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                </Stack>
              </Stack>
              <Divider sx={{ my: 1 }} />
            </>
          ) : (
            <VideoCardInSkeletonView />
          )}
        </Stack>
      </Grid>
      <Grid xs={12} md={4}>
        {suggestedVideos
          ? suggestedVideos.map((video, i) => (
              <VideoCard key={i} video={video} />
            ))
          : [0, 1, 2, 3, 4, 5, 6].map((e, i) => {
              return <SuggestedVideoCardInSkeletonView key={i} />;
            })}
      </Grid>
    </Grid>
  );
}
