import { Stack, Chip } from "@mui/material";
import { genres } from "../utils/constants";

export default function Genres({ selectedGenre, setSelectedGenre }) {
  return (
    <Stack
      position="sticky"
      top={0}
      left={0}
      bgcolor="background.paper"
      zIndex={100}
      px={{ xs: 1, sm: 3 }}
      py={2}
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ overflow: "hidden", overflowX: "scroll" }}
    >
      {genres.map((genre, index) => (
        <Chip
          onClick={() => setSelectedGenre(genre)}
          color={selectedGenre === genre ? "primary" : "default"}
          key={genre}
          label={genre}
        />
      ))}
    </Stack>
  );
}
