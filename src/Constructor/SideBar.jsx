import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Frame } from "./Frame";
import { ImgEditor } from "../Constructor/imgEditor";
import { FramesPanel } from "./framesPanel";

const drawerWidth = 240;
const drawerWidth2 = 650;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    // marginRight: `${drawerWidth2}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function SideBar({
  frame,
  frames,
  setActiveFrame,
  activeFrame,
  setFrame,
  setFrames,
  setActiveImg,
  activeImg,
  setJsonFile,
}) {
  console.log("++++++++++++", frames);
  const [color, setColor] = useState("rgb(230, 202, 202)");
  const [changeColorIndex, setChangeColorIndex] = useState(0);
  const theme = useTheme();
  const [openLeft, setOpenLeft] = useState(true);
  const [openRight, setOpenRight] = useState(true);

  const handleDrawerOpen = () => {
    setOpenLeft(true);
  };

  const handleDrawerClose = () => {
    setOpenLeft(false);
  };

  const handleDrawerOpen2 = () => {
    setOpenRight(true);
  };

  const handleDrawerClose2 = () => {
    setOpenRight(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={openLeft}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            // sx={{ mr: 2, ...(openLeft && { display: "none" }) }}
            style={{ top: "-45%" }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography sx={{ mr: 1 }} variant="h6" noWrap component="div">
            Frames Panel
          </Typography>
          <Typography sx={{ mr: 2 }} variant="h6" noWrap component="div">
            Img Editor
          </Typography> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen2}
            edge="start"
            // sx={{ mr: 2, ...(openRight && { display: "none" }) }}
            style={{ top: "-45%", right: "-71%" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          // width: drawerWidth2,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth2,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={openRight}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose2}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <ImgEditor
          frame={frame}
          setFrame={setFrame}
          setActiveFrame={setActiveFrame}
          activeFrame={activeFrame}
          frames={frames}
          setFrames={setFrames}
          setActiveImg={setActiveImg}
          activeImg={activeImg}
          setJsonFile={setJsonFile}
        />
      </Drawer>
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={openLeft}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        {/* FRAMES PANEL */}

        {/* <div className="leftPanel">
          <Stack className="addFrame" spacing={2} direction="row">
            <Button variant="contained">Add Frame</Button>
          </Stack>
          {frames?.frames?.map((frame, index) => {
            return (
              <div
                className="frameBox"
                key={index}
                style={
                  index == changeColorIndex ? { backgroundColor: color } : null
                }
                onClick={() => {
                  setChangeColorIndex(index);
                  setColor("rgb(174, 148, 148)");
                  setActiveFrame(index);
                  setFrame(frames?.frames?.[index]);
                }}
              >
                <div className="forFlex">
                  {index + 1}
                  <div className="framePreview">
                    <Frame data={frame} initial={"show"} />
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        <FramesPanel
          frames={frames}
          setActiveFrame={setActiveFrame}
          activeFrame={activeFrame}
          setFrame={setFrame}
          setFrames={setFrames}
          setActiveImg={setActiveImg}
        />
      </Drawer>
    </Box>
  );
}
