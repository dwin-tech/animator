import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function EditorStyles({
  frames,
  activeFrame,
  activeImg,
  handleOnChangeStyles,
}) {
  return (
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
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.width ||
              ""
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
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.height ||
              ""
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
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.top || ""
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
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.bottom ||
              ""
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
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.left ||
              ""
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
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.right ||
              ""
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
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.zIndex ||
              ""
            }
            onChange={(e) => {
              handleOnChangeStyles("zIndex", e.target.value);
            }}
            size="small"
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
