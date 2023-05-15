import { Stack, Typography } from "@mui/material";
import VideosWrapper, { VideoContainer } from "../../../layouts/VideoWrapper";
import { useContext, useState, useEffect } from "react";
import { ChannelContext } from "../Channel";
import { fetchFromAPI } from "../../../services/youtubeAPI";
import LoadingScreen from "../../../components/LoadingScreen";
import PlaylistCard from "../../../components/Playlists/PlaylistCard";

export default function ChannelPlaylists() {
  const { details } = useContext(ChannelContext);
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    fetchFromAPI(
      `playlists?part=snippet&id=${details?.contentDetails?.relatedPlaylists?.uploads}`
    ).then((data) => {
      setPlaylists(data.items);
    });
  }, [details]);
  return playlists ? (
    <Stack p={2} pb={5} spacing={1}>
      <Typography color="gray" fontWeight="bold" fontSize={16}>
        Created Playlists
      </Typography>
      <VideosWrapper>
        {playlists.map((item, i) => (
          <VideoContainer key={i}>
            <PlaylistCard key={item.id} playlist={item} />
          </VideoContainer>
        ))}
      </VideosWrapper>
    </Stack>
  ) : (
    <LoadingScreen />
  );
}
