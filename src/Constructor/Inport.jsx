import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import DragDrop from "./DragDrop";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ImportFile({ setJsonFile, handleClose }) {
  const [value, setValue] = React.useState(0);
  const [json, setJson] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Upload file" {...a11yProps(0)} />
          <Tab label="Raw text" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DragDrop handleClose={handleClose} setJsonFile={setJsonFile} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Textarea
          style={{
            border: "thin solid rgba(0, 0, 0, 0.12)",
            height: "100px",
            resize: "none",
          }}
          onChange={(e) => {
            setJson(e.target.value);
          }}
          placeholder="Past your JSON..."
          minRows={2}
          size="lg"
        />
        <Button
          style={{
            marginTop: "30px",
            marginBottom: "-10px",
          }}
          onClick={() => {
            setJsonFile(json);
            handleClose();
          }}
          disabled={!json}
          variant="contained"
        >
          Import
        </Button>
      </TabPanel>
    </Box>
  );
}
