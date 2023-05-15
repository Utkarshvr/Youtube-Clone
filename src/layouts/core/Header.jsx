import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

// Material
import {
  Avatar,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

// Icons
import { Menu, Search, ArrowBack } from "@mui/icons-material";

import { useState } from "react";
import SearchField from "../../components/Form/SearchField";

const MoboHeader = ({ setOpenMoboSearch }) => (
  <>
    <IconButton
      onClick={() => {
        setOpenMoboSearch(false);
      }}
    >
      <ArrowBack />
    </IconButton>
    <SearchField />
  </>
);

export default function Header({ setMiniDrawer }) {
  const [openMoboSearch, setOpenMoboSearch] = useState(false);

  return (
    <Stack
      height="8vh"
      bgcolor="background.paper"
      px={{ xs: 1, sm: 3 }}
      py={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {openMoboSearch ? (
        <MoboHeader setOpenMoboSearch={setOpenMoboSearch} />
      ) : (
        <>
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{ display: { xs: "none", sm: "flex" } }}
              onClick={() => setMiniDrawer((prev) => !prev)}
            >
              <Menu />
            </IconButton>
            <Logo variant="letter" />
          </Stack>
          <Stack sx={{ display: { xs: "none", sm: "flex" } }}>
            <SearchField />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              onClick={() => {
                setOpenMoboSearch(true);
              }}
              sx={{ display: { sm: "none" } }}
            >
              <Search />
            </IconButton>
            <Link to="/">
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://yt3.ggpht.com/fBDwKLnIlj1PP4JWZQg7bX0K_hyJJtqzG85FHQusBF4neM5KhPt7kpChjDK88lbAHAj35vgFvg=s88-c-k-c0x00ffffff-no-rj-mo"
              />
            </Link>
          </Stack>
        </>
      )}
    </Stack>
  );
}
