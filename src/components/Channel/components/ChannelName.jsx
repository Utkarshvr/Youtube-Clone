import { CheckCircle } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default function ChannelName({ primaryColor, name, verified }) {
  return (
    <Stack spacing={0.5} alignItems="center" direction="row">
      <Typography
        fontWeight="bold"
        variant="caption"
        color={primaryColor ? "Background" : "gray"}
        sx={{
          "&:hover": { color: "Background" },
        }}
      >
        {name}
      </Typography>
      {verified && (
        <CheckCircle
          color={primaryColor ? "primary" : "disabled"}
          fontSize="6px"
        />
      )}
    </Stack>
  );
}
