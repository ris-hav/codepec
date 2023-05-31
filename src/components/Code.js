import { useContext } from "react";

import Editor from "./Editor";
import { Box, styled } from "@mui/material";

import { DataContext } from "../context/DataProvider";

const Container = styled(Box)(({ view }) => ({
  display: "flex",
  backgroundColor: "#060606",
  height: view ? "100%" : "50vh",
  flexDirection: view ? "column" : "row",
  flexGrow: view && 1,
}));

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs, view } = useContext(
    DataContext
  );

  return (
    <Container view={view}>
      <Editor
        language="xml"
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="css"
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="javascript"
        heading="JavaScript"
        icon="( )"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
