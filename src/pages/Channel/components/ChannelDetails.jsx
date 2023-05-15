import { useContext } from "react";
import { Skeleton, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import { ChannelContext } from "../Channel";

const ChannelDetailsInSkeletonView = () => (
  <Stack width="100%">
    <Skeleton variant="rectangular" width="100%" height={300} />
  </Stack>
);

export default function ChannelDetails() {
  const { details } = useContext(ChannelContext);
  return details ? (
    <Stack>
      <div
        style={{
          height: 150,
          background: `#333`,
          background: `url(${details?.brandingSettings?.image?.bannerExternalUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Stack p={2}>
        <ChannelCard details={details} />
      </Stack>
    </Stack>
  ) : (
    <ChannelDetailsInSkeletonView />
  );
}
