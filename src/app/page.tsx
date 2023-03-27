"use client";

import { Box, Text } from "@chakra-ui/react";
import { Header } from "./Header";
import Home from "./home/page.tsx";
export default function Page() {
  return (
    <Box>
      <Header />
      <Home />
    </Box>
  );
}
