import { Stack, Typography } from "@mui/material";
import logo from "../assets/youtube-logo.svg";
import { Link } from "react-router-dom";

export default function Logo({ variant }) {
  return (
    <Link style={{ margin: "auto" }} to="/">
      <Stack alignItems="center" direction="row">
        <img src={logo} width="36px" height="32px" alt="Logo" />
        {variant === "letter" && (
          <Typography fontSize={20} fontWeight="bold">
            YouTube
          </Typography>
        )}
      </Stack>
    </Link>
  );
}
