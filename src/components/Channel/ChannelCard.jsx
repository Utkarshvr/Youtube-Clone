import { Stack } from "@mui/material";
import ChannelName from "./components/ChannelName";
import { Link } from "react-router-dom";

export default function ChannelCard({ channel, loading }) {
  const {
    snippet: { publishedAt, channelId, channelTitle, title, thumbnails },
    id: { videoId },
  } = channel;
  return (
    <Link to={`/channel/${channelId}`}>
      <Stack
        minWidth="200px"
        width="100%"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <img
          style={{
            background: "#333",
            borderRadius: 1000,
            objectFit: "cover",
          }}
          width={thumbnails.medium.width}
          height={thumbnails.medium.width}
          src={thumbnails.medium.url}
          alt="Channel"
        />
        <ChannelName
          primaryColor={true}
          channelId={channelId}
          name={channelTitle}
          verified={true}
        />
      </Stack>
    </Link>
  );
}
