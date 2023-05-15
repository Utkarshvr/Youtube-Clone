import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../services/youtubeAPI";
import { formatDistanceToNow } from "date-fns";
import { Typography } from "@mui/material";

const VideoCardDetails = ({ videoId }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
      (data) => {
        setVideo(data.items[0]);
      }
    );
  }, []);
  return (
    video && (
      <Typography color="gray" variant="subtitle2">
        {parseInt(video.statistics.viewCount).toLocaleString()} views &#9679;{" "}
        {formatDistanceToNow(new Date(video.snippet.publishedAt), {
          addSuffix: true,
        })}
      </Typography>
    )
  );
};
export default VideoCardDetails;
