import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VideoCard from "../../components/Videos/VideoCard";
import ChannelCard from "../../components/Channel/ChannelCard";
import { useContext } from "react";
import { FeedContext } from "../../pages/Home/Home";
import VideosWrapper, { VideoContainer } from "../VideoWrapper";

export default function Videos({ start, end }) {
  const { videos, loading } = useContext(FeedContext);
  return (
    <VideosWrapper>
      {videos.slice(start, end).map((item) => (
        <VideoContainer>
          {item.id.videoId && (
            <VideoCard loading={loading} key={item.id.videoid} video={item} />
          )}
          {item.id.channelId && (
            <ChannelCard
              loading={loading}
              key={item.id.channelId}
              channel={item}
            />
          )}
        </VideoContainer>
      ))}
    </VideosWrapper>
  );
}
