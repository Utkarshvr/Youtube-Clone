import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../services/youtubeAPI";
import { useParams } from "react-router-dom";
import { Skeleton, Stack, Typography } from "@mui/material";

const statsTypoStyle = {
  p: 2,
  borderTop: "2px solid",
  borderBottom: "2px solid",
  borderColor: "divider",
};

const ChannelAboutInSkeletonView = () => (
  <Stack width="100%" direction="row" justifyContent="space-between">
    <Skeleton variant="rectangular" width="70%" height={290} />
    <Skeleton variant="rectangular" width="20%" height={290} />
  </Stack>
);

export default function ChannelAbout() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=id%2Csnippet&id=${id}`).then((data) => {
      setDetails(data.items[0]);
    });
  }, []);
  return details ? (
    <Stack p={2} pb={15} spacing={2}>
      <Typography fontSize={16} fontWeight="bold" color="gray">
        {details.snippet.title}
      </Typography>
      <Stack
        spacing={1}
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <Stack width={{ xs: "100%", md: "70%" }}>
          <Typography fontSize={20} fontWeight="bold">
            Description
          </Typography>
          <Typography fontSize={16} color="gray">
            {details.snippet.description}
          </Typography>
        </Stack>
        <Stack>
          <Typography mb={1} fontSize={20} fontWeight="bold">
            Stats
          </Typography>
          <Stack direction="row" sx={statsTypoStyle}>
            <Typography fontSize={16}>
              Joined {new Date(details.snippet.publishedAt).toDateString()}
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ ...statsTypoStyle, borderTop: 0 }}>
            <Typography fontSize={16}>
              {parseInt(details.statistics.viewCount).toLocaleString()} views
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <ChannelAboutInSkeletonView />
  );
}
