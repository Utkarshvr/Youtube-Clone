import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChannelTab({ tab }) {
  const getTab = () => {
    let myTab;
    if (tab === "videos") {
      myTab = 0;
    } else if (tab === "about") {
      myTab = 1;
    } else {
      myTab = 0;
    }
    return myTab;
  };

  const [value, setValue] = useState(getTab());

  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    let path;
    if (newValue === 0) path = "videos";
    else if (newValue === 1) path = "playlists";
    else if (newValue === 2) path = "about";
    navigate(path);
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        zIndex: 10000,
      }}
    >
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Videos" />
        <Tab label="Playlists" />
        <Tab label="About" />
      </Tabs>
    </Box>
  );
}
