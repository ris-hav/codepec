import Header from "./Header";
import Code from "./Code";
import Result from "./Result";

import { Box, styled } from "@mui/material";

import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Home = () => {
  const { view } = useContext(DataContext);
  return (
    <>
      <Header />
      <Box style={{ display: view && "flex" }}>
        <Code />
        <Result />
      </Box>
    </>
  );
};

export default Home;
