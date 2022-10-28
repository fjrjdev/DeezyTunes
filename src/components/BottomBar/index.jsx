import React, { useState } from "react";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import { Typography, IconButton, Slider } from "@mui/material";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";

const CoverImage = styled("div")({
  width: 50,
  height: 50,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const BottomBar = () => {
  const [paused, setPaused] = useState(false);
  const [position, setPosition] = useState(32);
  const duration = 200;

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 10,
        bgcolor: "#FFF",
        height: "10%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 6.3%",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
          <CoverImage>
            <img
              src="https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/500x500-000000-80-0-0.jpg"
              alt="artista"
            />
          </CoverImage>
          <Box sx={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
            <Typography
              variant="overline"
              color="text.primary"
              fontWeight={500}
              noWrap
            >
              Zé Felipe, Mc Mari
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={500}
            >
              <b>Bandido</b>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: -1,
              gap: "10px",
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" />
            </IconButton>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <PlayArrowRounded sx={{}} /> : <PauseRounded sx={{}} />}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 2,
              height: "100%",
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value)}
              sx={{
                color: "#000",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&:before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px
                     rgb(255 255 255 / 16%)"
                  `,
                  },
                  "&.Mui-active": {
                    width: 20,
                    height: 20,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomBar;
