import { Box, Button, Image, Grid, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./AppHeader.css";

export default function AppHeader() {
  return (
    <Box
      width="100%"
      height="100%"
      p={5}
      bgGradient="linear(to-r, blue.200, purple.500)"
      display="inline-flex"
    >
      <Wrap width="100%" spacing={5}>
        <Link to="/">
          <Image width="50px" src="/assets/home.png"></Image>
        </Link>
        <Link to="/play">
          <Image width="50px" src="/assets/sword.png"></Image>
        </Link>
        <Link to="/about">
          <Image width="50px" src="/assets/question.png"></Image>
        </Link>
      </Wrap>
      <Box width="100%">
        <Button className="push-right">Login</Button>
      </Box>
    </Box>
  );
}
