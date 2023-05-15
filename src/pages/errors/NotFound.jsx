import { Typography, Box } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box
      width="100%"
      height="92vh"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography fontSize={32} component="span" color="HighlightText">
        Page Not Found
      </Typography>
    </Box>
  );
}
