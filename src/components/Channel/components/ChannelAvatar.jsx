import { Avatar, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../services/youtubeAPI";

export default function ChannelAvatar({ channelId }) {
  const [avatar, SetAvatar] = useState(null);
  useEffect(() => {
    fetchFromAPI(`channels?part=id%2Csnippet&id=${channelId}`).then((data) => {
      SetAvatar(data.items[0].snippet.thumbnails.default.url);
    });
  }, []);
  return avatar ? (
    <Avatar alt="Channel Avatar" src={avatar} />
  ) : (
    <Skeleton variant="circular" width={40} height={40} />
  );
}
