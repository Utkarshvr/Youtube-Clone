import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { drawerList_Category_Mobile } from "../../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 10000000000000000000,
        display: { md: "none" },
        bgcolor: "background.paper",
        py: 1,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {drawerList_Category_Mobile.map((item, index) => (
          <BottomNavigationAction
            onClick={() => handleNavigate(item.name)}
            label={item.name}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
