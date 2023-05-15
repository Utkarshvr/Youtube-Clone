import { Skeleton, Stack, Typography } from "@mui/material";
import ChannelAvatar from "../Channel/components/ChannelAvatar";
import ChannelName from "../Channel/components/ChannelName";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCardDetails from "./components/VideoCardDetails";

const VideoCardInSkeletonView = () => (
  <Stack minWidth="200px" spacing={1}>
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
export default function VideoCard({ video }) {
  const {
    snippet: { publishedAt, channelId, title, thumbnails, channelTitle },
    id: { videoId },
  } = video;

  const [inView, setInView] = useState(false);
  const ref = useRef();

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <Link to={`/video/${videoId}`}>
      <Stack minWidth="200px">
        <img
          ref={ref}
          style={{
            background: "#333",
            minHeight: "195px",
            minWidth: "200px",
            borderRadius: 15,
            objectFit: "cover",
          }}
          width="100%"
          src={thumbnails.medium.url}
          alt="Video"
        />
        <Stack minHeight={100} p={1} spacing={1} direction="row">
          <Stack alignItems="flex-start">
            <Link to={`/channel/${channelId}`}>
              <ChannelAvatar channelId={channelId} />
            </Link>
          </Stack>
          <Stack width="100%">
            <Typography variant="subtitle1">
              {title.length <= 50 ? title : title.slice(0, 50) + "..."}
            </Typography>
            <Link to={`/channel/${channelId}`}>
              <ChannelName
                channelId={channelId}
                name={channelTitle}
                verified={true}
              />
            </Link>
            <VideoCardDetails videoId={videoId} />
          </Stack>
        </Stack>
      </Stack>
    </Link>
  ) : (
    <div ref={ref}>
      <VideoCardInSkeletonView />
    </div>
  );
}
