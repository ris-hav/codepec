import React from "react";
import { useState, useEffect, useContext } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)(({ view }) => ({
  height: view ? "152vh" : "41vh",
  flexGrow: view && 1,
}));

export default function Result() {
  const [src, setSrc] = useState("");
  const { html, css, js, view } = useContext(DataContext);
  const srcCode = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 800);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container view={view}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
}
