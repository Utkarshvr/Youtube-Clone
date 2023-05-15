import { Stack } from "@mui/material";
import Shorts from "./core/Shorts";
import Videos from "./core/Videos";
import LoadingScreen from "../components/LoadingScreen";

import { useContext } from "react";
import { FeedContext } from "../pages/Home/Home";

export default function Feed() {
  const { loading } = useContext(FeedContext);

  return (
    <Stack
      spacing={2}
      px={{ xs: 0, sm: 1, md: 2 }}
      py={2}
      pb={15}
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Videos start={0} end={3} />
          <Shorts start={0} end={3} />
          <Videos start={3} end={3 + 9} />
          <Shorts start={3} end={3 + 9} />
          <Videos start={3 + 9} />
        </>
      )}
    </Stack>
  );
}
