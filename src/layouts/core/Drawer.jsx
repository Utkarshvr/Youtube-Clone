import { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

// Constants
import {
  drawerList_Category,
  drawerList_Category_Mobile,
  drawerListFooter,
} from "../../utils/constants";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MiniVariant = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return drawerList_Category_Mobile.map((item, index) => (
    <>
      <Link key={index} to={`/${item.name}`}>
        <ListItemButton
          sx={{ justifyContent: "center" }}
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            {item.icon}
          </ListItemIcon>
        </ListItemButton>
      </Link>
    </>
  ));
};

export default function YtDrawer({ miniDrawer }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box
      sx={{
        height: "92vh",
        overflowX: "hidden",
        overflowY: "auto",
        width: "100%",
        maxWidth: 300,
        p: 1,
        bgcolor: "background.paper",
      }}
    >
      {miniDrawer ? (
        <MiniVariant />
      ) : (
        <>
          <List component="nav">
            {drawerList_Category.map((item, index) => (
              <>
                <Link key={item} to={`/${item.name}`}>
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
                {index === 2 && <Divider sx={{ my: 2 }} />}
                {index === 8 && <Divider sx={{ my: 2 }} />}
              </>
            ))}
          </List>

          <Divider />
          <Stack spacing={2}>
            <Stack flexWrap="wrap" direction="row" spacing={1}>
              {drawerListFooter.map((item, index) => {
                return (
                  index <= 6 && (
                    <Link key={index} to="/">
                      <Typography
                        color="gray"
                        fontWeight="bold"
                        variant="caption"
                      >
                        {item}
                      </Typography>
                    </Link>
                  )
                );
              })}
            </Stack>
            <Stack flexWrap="wrap" direction="row" spacing={1}>
              {drawerListFooter.map((item, index) => {
                return (
                  index >= 7 && (
                    <Link key={index} to="/">
                      <Typography
                        color="gray"
                        fontWeight="bold"
                        variant="caption"
                      >
                        {item}
                      </Typography>
                    </Link>
                  )
                );
              })}
            </Stack>
          </Stack>
        </>
      )}
    </Box>
  );
}
