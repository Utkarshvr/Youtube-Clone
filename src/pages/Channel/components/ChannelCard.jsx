import { Skeleton, Stack, Typography } from "@mui/material";
import ChannelName from "../../../components/Channel/components/ChannelName";
import {
  ArrowRight,
  CheckCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ChannelCard({ details }) {
  return (
    <Stack
      alignItems="center"
      direction={{ xs: "column", md: "row" }}
      spacing={2}
    >
      <img
        style={{
          background: "#333",
          borderRadius: 1000,
          objectFit: "cover",
        }}
        width={details.snippet.thumbnails.default.width}
        height={details.snippet.thumbnails.default.width}
        src={details.snippet.thumbnails.default.url}
        alt="Channel"
      />
      <Stack spacing={0.5} alignItems={{ xs: "center", md: "flex-start" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h6" color="Background">
            {details.snippet.title}
          </Typography>
          <CheckCircle color="disabled" fontSize="6px" />
        </Stack>
        <Stack spacing={1} direction="row">
          <Typography fontWeight="bold" variant="caption" color="gray">
            {details.snippet.customUrl}
          </Typography>
          <Typography variant="caption" color="gray">
            {parseInt(details.statistics.subscriberCount).toLocaleString()}{" "}
            subscribers
          </Typography>
          <Typography variant="caption" color="gray">
            {parseInt(details.statistics.videoCount).toLocaleString()} videos
          </Typography>
        </Stack>
        <Link to="about">
          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle" color="gray">
              {details.snippet.description.length > 70
                ? details.snippet.description.slice(0, 70) + "..."
                : details.snippet.description}
            </Typography>
            <ArrowRight />
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
}
