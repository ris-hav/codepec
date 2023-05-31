import { useState } from "react";

import Tooltip from "@mui/material/Tooltip";

import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "../App.css";

import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Container = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const HoverCopyIcon = styled(ContentCopyIcon)`
  &:hover {
    color: #888;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const HoverCloseIcon = styled(CloseFullscreenIcon)`
  &:hover {
    transform: scale(0.9);
  }
`;

const HoverOpenIcon = styled(OpenInFullIcon)`
  &:hover {
    transform: scale(0.9);
  }
`;

const Editor = ({ heading, icon, color, value, onChange, language }) => {
  const [open, setOpen] = useState(true);

  const { setCopy, view } = useContext(DataContext);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <Box style={{ alignSelf: "center" }}>
          <Tooltip title="Copy">
            <HoverCopyIcon
              title="Copy"
              fontSize="small"
              style={{
                alignSelf: "center",
                margin: "0 20px",
              }}
              onClick={() => {
                setCopy(true);
                navigator.clipboard.writeText(value);
              }}
            />
          </Tooltip>
          {view ? null : open ? (
            <HoverCloseIcon
              fontSize="small"
              style={{ alignSelf: "center" }}
              onClick={() => setOpen((prevState) => !prevState)}
            />
          ) : (
            <HoverOpenIcon
              fontSize="small"
              style={{ alignSelf: "center" }}
              onClick={() => setOpen((prevState) => !prevState)}
            />
          )}
        </Box>
      </Header>

      <ControlledEditor
        className="controlled-editor"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineNumbers: true,
          theme: "material",
          lineWrapping: true,
          lint: true,
          mode: language,
        }}
      />
    </Container>
  );
};

export default Editor;
