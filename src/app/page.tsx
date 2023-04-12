"use client";
import { quarters } from "@/contents";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Header,
  HeroPoster,
  SpecializedTracks,
  QuarterCard,
  ProgramOfStudies,
  OutCome,
  Footer,
} from "@/components";

const Page = () => {
  return (
    <Box>
      <Header />
      <Box px={["4", "8", "16"]}>
        <HeroPoster />
        <ProgramOfStudies />
        <Flex
          my={"8"}
          gap={"8"}
          wrap={["wrap", "wrap", "nowrap"]}
          justifyContent={"space-between"}
        >
          {quarters.map(QuarterCard)}
        </Flex>
        <SpecializedTracks />
        <OutCome />
      </Box>
      <Footer />
    </Box>
  );
};
export default Page;
