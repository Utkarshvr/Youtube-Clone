// MUI
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// layouts
import YtDrawer from "./layouts/core/Drawer";
import Header from "./layouts/core/Header";

// pages
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import Channel from "./pages/Channel/Channel";
import Search from "./pages/Search/Search";

// other
import { Route, Routes } from "react-router-dom";
import ChannelVideos from "./pages/Channel/components/ChannelVideos";
import ChannelAbout from "./pages/Channel/components/ChannelAbout";
import { useState } from "react";
import BottomNav from "./layouts/core/BottomNav";
import ConstructionPage from "./pages/errors/ConstructionPage";
import NotFound from "./pages/errors/NotFound";
import { drawerList_Category } from "./utils/constants";
import ChannelPlaylists from "./pages/Channel/components/ChannelPlaylists";

export default function App() {
  const [miniDrawer, setMiniDrawer] = useState(false);

  return (
    <Box>
      <Header setMiniDrawer={setMiniDrawer} />
      <BottomNav />
      <Grid sx={{ height: "92vh", overflowY: "scroll" }} container>
        <Grid
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "92vh",
          }}
          xs={miniDrawer ? 1 : 2}
          display={{ xs: "none", md: "flex" }}
        >
          <YtDrawer miniDrawer={miniDrawer} />
        </Grid>
        <Grid xs={12} md={miniDrawer ? 11 : 10}>
          <Routes>
            {["/", "/Home"].map((path) => (
              <Route path={path} element={<Home />} />
            ))}
            <Route path="/video/:videoID" element={<Video />} />
            <Route path="/channel/:id" element={<Channel />}>
              {["", "videos"].map((path) => (
                <Route
                  key={path} // optional: avoid full re-renders on route changes
                  path={path}
                  element={<ChannelVideos />}
                />
              ))}
              <Route path="about" element={<ChannelAbout />} />
              <Route path="playlists" element={<ChannelPlaylists />} />
            </Route>
            <Route path="search/:searchTerm" element={<Search />} />
            <Route path="/*" element={<NotFound />} />
            {drawerList_Category.map(({ name }, i) => {
              return (
                name !== "Home" && (
                  <Route key={i} path={name} element={<ConstructionPage />} />
                )
              );
            })}
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
}
