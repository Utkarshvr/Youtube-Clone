import { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../../services/youtubeAPI";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";

// Components
import ChannelDetails from "./components/ChannelDetails";
import { Outlet } from "react-router-dom";
import ChannelTab from "./components/ChannelTab";

export const ChannelContext = createContext();

export default function Channel() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=id%2Csnippet&id=${id}`).then((data) => {
      setDetails(data.items[0]);
    });
  }, [id]);
  return (
    <ChannelContext.Provider value={{ details }}>
      <Stack height="92vh" sx={{ overflowY: "auto", boxSizing: "contentBox" }}>
        <ChannelDetails />
        <ChannelTab tab={window.location.pathname.split("/").pop()} />
        <Outlet />
      </Stack>
    </ChannelContext.Provider>
  );
}
