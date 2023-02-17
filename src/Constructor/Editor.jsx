import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import "./style.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MuiChipsInput } from "mui-chips-input";

const MODAL_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export function Editor({
  setActiveImg,
  setFrames,
  frames,
  activeFrame,
  activeImg,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={"span"}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function updateFrames(frames) {
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
  }

  function handleOnChangeStyles(key, value) {
    frames.frames[activeFrame].imgs[activeImg].style[key] = value;
    updateFrames(frames);
  }

  function handleOnChangeVariants(hiddenShow, key, value) {
    frames.frames[activeFrame].imgs[activeImg].variants[hiddenShow][key] =
      value;
    updateFrames(frames);
  }

  function handleOnChangeVariantsTransition(key, value) {
    frames.frames[activeFrame].imgs[activeImg].variants.show.transition[key] =
      value;
    updateFrames(frames);
  }

  return (
    <div
      className="editor"
      style={
        activeImg == undefined ? { display: "none" } : { display: "block" }
      }
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Accordion
          style={{
            marginBottom: "20px",
            backgroundColor: "rgb(214, 229, 229) ",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Styles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="editorInputs">
              <FormControl style={{ margin: "7px", width: "226px" }}>
                <InputLabel style={{ marginTop: "-7px" }} id="Overflow">
                  Overflow
                </InputLabel>
                <Select
                  style={{ height: "40px" }}
                  labelId="Overflow"
                  id="Overflow"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                      ?.overflow || ""
                  }
                  label="Overflow"
                  onChange={(e) => {
                    handleOnChangeStyles("overflow", e.target.value);
                  }}
                >
                  <MenuItem value="">none</MenuItem>
                  <MenuItem value="hidden">hidden</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={{ margin: "7px", width: "226px" }}>
                <InputLabel style={{ marginTop: "-7px" }} id="Position">
                  Position
                </InputLabel>
                <Select
                  style={{ height: "40px" }}
                  labelId="Position"
                  id="Position"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                      ?.position || ""
                  }
                  label="Position"
                  onChange={(e) => {
                    handleOnChangeStyles("position", e.target.value);
                  }}
                >
                  <MenuItem value="">none</MenuItem>
                  <MenuItem value="relative">relative</MenuItem>
                  <MenuItem value="absolute">absolute</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="editorInputs">
              <TextField
                placeholder="10% or 30px"
                label="Width"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                    ?.width || ""
                }
                onChange={(e) => {
                  handleOnChangeStyles("width", e.target.value);
                }}
                size="small"
              />
              <TextField
                placeholder="10% or 30px"
                label="Height"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                    ?.height || ""
                }
                onChange={(e) => {
                  handleOnChangeStyles("height", e.target.value);
                }}
                size="small"
              />
            </div>
            <div className="editorInputs">
              <TextField
                placeholder="10% or 30px"
                label="Top"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                    ?.top || ""
                }
                onChange={(e) => {
                  handleOnChangeStyles("top", e.target.value);
                }}
                size="small"
              />
              <TextField
                placeholder="10% or 30px"
                label="Bottom"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                    ?.bottom || ""
                }
                onChange={(e) => {
                  handleOnChangeStyles("bottom", e.target.value);
                }}
                size="small"
              />
            </div>
            <div className="editorInputs">
              <TextField
                placeholder="10% or 30px"
                label="Left"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                    ?.left || ""
                }
                onChange={(e) => {
                  handleOnChangeStyles("left", e.target.value);
                }}
                size="small"
              />
              <TextField
                placeholder="10% or 30px"
                label="Right"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                    ?.right || ""
                }
                onChange={(e) => {
                  handleOnChangeStyles("right", e.target.value);
                }}
                size="small"
              />
            </div>
            <div className="editorInputs">
              <TextField
                inputProps={{ min: 0 }}
                placeholder="1"
                type="number"
                label="zIndex"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                    ?.zIndex || ""
                }
                onChange={(e) => {
                  handleOnChangeStyles("zIndex", e.target.value);
                }}
                size="small"
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <div>
          {/* <CustomStylesEditor handleOnChangeStyles={handleOnChangeStyles} /> */}
        </div>
        <Root>
          <Divider>Animation</Divider>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="From" {...a11yProps(0)} />
              <Tab label="To" {...a11yProps(1)} />
              <Tab label="Transition" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="Width"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.width || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "width", e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  placeholder="10% or 30px"
                  label="Height"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.height || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "height", e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="Top"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.top || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "top", e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  placeholder="10% or 30px"
                  label="Bottom"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.bottom || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "bottom", e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="Left"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.left || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "left", e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  placeholder="10% or 30px"
                  label="Right"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.right || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "right", e.target.value);
                  }}
                  size="small"
                />
              </div>

              <div className="editorInputs">
                <FormControl style={{ margin: "7px", width: "226px" }}>
                  <InputLabel
                    style={{ marginTop: "-7px" }}
                    id="TransformOrigin"
                  >
                    TransformOrigin
                  </InputLabel>
                  <Select
                    style={{ height: "40px" }}
                    labelId="TransformOrigin"
                    id="TransformOrigin"
                    value={
                      frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                        ?.transformOrigin || ""
                    }
                    label="TransformOrigin"
                    onChange={(e) => {
                      handleOnChangeStyles("transformOrigin", e.target.value);
                    }}
                  >
                    <MenuItem value="">none</MenuItem>
                    <MenuItem value="bottom right">bottom right</MenuItem>
                    <MenuItem value="bottom left">bottom left</MenuItem>
                    <MenuItem value="top right">top right</MenuItem>
                    <MenuItem value="top left">top left</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  placeholder="10% or 30px"
                  label="Rotate"
                  onBlur={(e) => {
                    if (!e.target.value) {
                      delete frames.frames[activeFrame].imgs[activeImg].variants
                        ?.hidden?.rotate;
                    }
                  }}
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.rotate || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "rotate", e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="X"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.x || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "x", +e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  placeholder="10% or 30px"
                  label="Y"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.y || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "y", +e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs">
                <TextField
                  type="number"
                  inputProps={{ min: 0, max: 1, step: "0.1" }}
                  placeholder="from 0 to 1"
                  label="Opacity"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.hidden?.opacity || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("hidden", "opacity", e.target.value);
                  }}
                  size="small"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="Width"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.width || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "width", e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  placeholder="10% or 30px"
                  label="Height"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.height || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "height", e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="Top"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.top || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "top", e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  placeholder="10% or 30px"
                  label="Bottom"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.bottom || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "bottom", e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="Left"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.left || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "left", e.target.value);
                  }}
                  size="small"
                />{" "}
                <TextField
                  placeholder="10% or 30px"
                  label="Right"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.right || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "right", e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs">
                <TextField
                  placeholder="10% or 30px"
                  label="X"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.x || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "x", +e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  placeholder="10% or 30px"
                  label="Y"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.y || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "y", +e.target.value);
                  }}
                  size="small"
                />
              </div>
              <div className="editorInputs chipInput">
                <MuiChipsInput
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.rotate || []
                  }
                  label="Rotate"
                  onChange={(chips) => {
                    handleOnChangeVariants("show", "rotate", chips);
                  }}
                />
                <TextField
                  type="number"
                  inputProps={{ min: 0, max: 1, step: "0.1" }}
                  placeholder="from 0 to 1"
                  label="Opacity"
                  value={
                    frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                      ?.show?.opacity || ""
                  }
                  onChange={(e) => {
                    handleOnChangeVariants("show", "opacity", e.target.value);
                  }}
                  size="small"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="editorInputs">
              <TextField
                inputProps={{ min: 0 }}
                type="number"
                placeholder="2 times"
                label="Repeat"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                    ?.show?.transition?.repeat || ""
                }
                onChange={(e) => {
                  handleOnChangeVariantsTransition("repeat", e.target.value);
                }}
                size="small"
              />
              <TextField
                inputProps={{ min: 0 }}
                type="number"
                placeholder="0.7 speed"
                label="Duration"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                    ?.show?.transition?.duration || ""
                }
                onChange={(e) => {
                  handleOnChangeVariantsTransition("duration", e.target.value);
                }}
                size="small"
              />
              <TextField
                inputProps={{ min: 0 }}
                type="number"
                placeholder="0.7 sec"
                label="Delay"
                value={
                  frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants
                    ?.show?.transition?.delay || ""
                }
                onChange={(e) => {
                  handleOnChangeVariantsTransition("delay", e.target.value);
                }}
                size="small"
              />
            </div>
          </TabPanel>
        </Root>
      </Box>
    </div>
  );
}
