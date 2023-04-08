import { Container } from "@mui/material";
import React from "react";
import MusicList from "../../components/MusicList";
import ResposiveAppBar from "../../components/ResposiveAppBar";
import BottomBar from "../../components/BottomBar";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <ResposiveAppBar />
      <MusicList />
      <BottomBar />
    </Container>
  );
};

export default Home;
