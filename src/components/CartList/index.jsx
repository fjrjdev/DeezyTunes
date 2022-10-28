import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import MusicCard from "../MusicCard";
import { QueueContext } from "../../contexts/QueueContext";
import { Box } from "@mui/material";

const CartList = () => {
  const { queue } = useContext(QueueContext);

  return (
    <Grid
      container
      spacing={1}
      columns={24}
      sx={{ padding: "2.5% 0", justifyContent: "center" }}
    >
      {queue === null ? (
        <>
          <Grid item xs={24} sm={24} md={24} lg={24}>
            <Grid item xs={24} sm={24} md={24} lg={24}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h1>Sua playlist esta vazia </h1>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={24} sm={24} md={24} lg={24}>
            <h1>Playlist</h1>
          </Grid>
          {queue.map((item) => (
            <Grid key={item.id} item xs={24} sm={12} md={8} lg={4.8}>
              <MusicCard item={item} removeItem queue={queue} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default CartList;
