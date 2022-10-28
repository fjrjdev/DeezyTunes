import React, { useContext } from "react";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import ImageListItem from "@mui/material/ImageListItem";
import { QueueContext } from "../../contexts/QueueContext";

const MusicCard = ({ item, removeItem = false }, queue) => {
  const { addMusic, removeMusic } = useContext(QueueContext);

  const handleClick = (item) => {
    addMusic(item);
  };
  const handleRemove = (id) => {
    removeMusic(id, queue);
  };
  const handlePlay = (elem, item) => {
    if (elem === "IMG") {
      const music = new Audio(item.preview);
      music.play();
      music.volume = 0.2;
    }
  };

  return (
    <ImageListItem
      sx={{
        "&:hover img": { cursor: "pointer" },
      }}
      onClick={(event) => handlePlay(event.target.nodeName, item)}
    >
      <img src={item.album.cover_big} alt={item.title} loading="auto" />
      <ImageListItemBar
        title={item.title}
        subtitle={item.artist.name}
        actionIcon={
          removeItem ? (
            <IconButton
              onClick={() => handleRemove(item.id)}
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.title}`}
            >
              <PlaylistRemoveIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => handleClick(item)}
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.title}`}
            >
              <PlaylistAddIcon />
            </IconButton>
          )
        }
      />
    </ImageListItem>
  );
};

export default MusicCard;
