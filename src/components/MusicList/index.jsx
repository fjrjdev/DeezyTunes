import MusicCard from "../MusicCard";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { MusicsContext } from "../../contexts/MusicsContext";

function MusicList() {
  const { songs } = useContext(MusicsContext);
  return (
    <Grid
      container
      spacing={1}
      columns={24}
      sx={{ padding: "2.5% 0", justifyContent: "center", mb: 10 }}
    >
      {songs.map((item) => (
        <Grid key={item.id} item xs={24} sm={12} md={8} lg={4.8}>
          <MusicCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MusicList;
