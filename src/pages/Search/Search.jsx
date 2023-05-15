import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import { fetchFromAPI } from "../../services/youtubeAPI";
import VideoCard from "../../components/Videos/VideoCard";
import ChannelCard from "../../components/Channel/ChannelCard";
import VideosWrapper, { VideoContainer } from "../../layouts/VideoWrapper";

export default function Search() {
  // State
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  // Effect
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [searchTerm]);

  return !loading ? (
    <Stack
      spacing={2}
      px={{ xs: 0, sm: 1, md: 2 }}
      py={2}
      pb={15}
      height="92vh"
      sx={{ overflowY: "auto", boxSizing: "contentBox" }}
    >
      <VideosWrapper>
        {videos.map((item) => (
          <VideoContainer>
            {item.id.videoId && (
              <VideoCard key={item.id.videoid} video={item} />
            )}
            {item.id.channelId && (
              <ChannelCard key={item.id.channelId} channel={item} />
            )}
          </VideoContainer>
        ))}
      </VideosWrapper>
    </Stack>
  ) : (
    <LoadingScreen />
  );
}
