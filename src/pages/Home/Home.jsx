import { Stack } from "@mui/material";
import Feed from "../../layouts/Feed";
import Genres from "../../components/Genres";

// For API
import { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../../services/youtubeAPI";

export const FeedContext = createContext();

export default function Home() {
  // States
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  // Effect
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedGenre}`).then(
      (data) => {
        setVideos(data.items);
        setLoading(false);
      }
    );
  }, [selectedGenre]);

  return (
    <Stack>
      <FeedContext.Provider value={{ loading, setLoading, videos, setVideos }}>
        <Genres
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <Feed />
      </FeedContext.Provider>
    </Stack>
  );
}
