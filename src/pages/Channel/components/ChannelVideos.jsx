// For API
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../../services/youtubeAPI";
import VideoCard from "../../../components/Videos/VideoCard";
import LoadingScreen from "../../../components/LoadingScreen";
import { useParams } from "react-router-dom";
import VideosWrapper, { VideoContainer } from "../../../layouts/VideoWrapper";

export default function ChannelVideos() {
  const [channelVideos, setChannelVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setChannelVideos(videosData?.items);
      setLoading(false);
    };

    fetchResults();
  }, [id]);
  return loading ? (
    <LoadingScreen />
  ) : (
    <VideosWrapper>
      {channelVideos.map((item, i) => (
        <VideoContainer key={i}>
          <VideoCard key={item.id.videoid} video={item} />
        </VideoContainer>
      ))}
    </VideosWrapper>
  );
}
