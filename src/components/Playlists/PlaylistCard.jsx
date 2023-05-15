import { Skeleton, Stack, Typography } from "@mui/material";
import ChannelName from "../Channel/components/ChannelName";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const PlaylistCardInSkeletonView = () => (
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
export default function PlaylistCard({ playlist }) {
  const {
    snippet: { publishedAt, channelId, title, thumbnails, channelTitle },
    id,
  } = playlist;

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
    <Link to={`/`}>
      <Stack minWidth="200px">
        <div style={{ position: "relative" }}>
          <img
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
          <div
            style={{
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              width: "30%",
              height: "97%",
              background: "rgba(0,0,0,.8)",
              position: "absolute",
              top: 0,
              right: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            play
          </div>
        </div>
        <Stack minHeight={100} p={1} spacing={1} direction="row">
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
          </Stack>
        </Stack>
      </Stack>
    </Link>
  ) : (
    <div ref={ref}>
      <PlaylistCardInSkeletonView />
    </div>
  );
}
