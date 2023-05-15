import { Button, IconButton, Stack, Typography } from "@mui/material";

// Icons
import ShortsIcon from "@mui/icons-material/Timelapse";
import DismissIcon from "@mui/icons-material/ClearRounded";

// Other Components
import ShortsItem from "../../components/Videos/ShortsItem";
import { useContext, useState } from "react";
import { FeedContext } from "../../pages/Home/Home";

const ShortsLogo = ({ showLetter }) => (
  <Stack direction="row" spacing={1}>
    <ShortsIcon />
    {showLetter && (
      <Typography fontSize={16} fontWeight="bold">
        Shorts
      </Typography>
    )}
  </Stack>
);

const DismissedShelfView = ({ setDismissShelf }) => (
  <Stack p={1} direction="row" alignItems="center" spacing={2}>
    <Typography color="gray">Shelf is hidden</Typography>
    <Button
      onClick={() => setDismissShelf(false)}
      variant="text"
      color="primary"
    >
      Undo
    </Button>
  </Stack>
);

export default function Shorts({ start, end }) {
  const [dismissShelf, setDismissShelf] = useState(false);
  const { videos } = useContext(FeedContext);

  return (
    <Stack
      sx={{
        borderTop: "4px solid",
        borderBottom: "4px solid",
        borderColor: "divider",
      }}
    >
      {dismissShelf ? (
        <DismissedShelfView setDismissShelf={setDismissShelf} />
      ) : (
        <>
          <Stack
            p={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ShortsLogo showLetter={true} />
            <IconButton onClick={() => setDismissShelf(true)}>
              <DismissIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ overflowY: "hidden", overflowX: "auto", maxWidth: "100%" }}
            p={1}
          >
            {videos.slice(start, end).map((item, index) => (
              <ShortsItem key={index} short={item} />
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
}
