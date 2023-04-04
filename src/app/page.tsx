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
} from "@/components";

const Page = () => {
  return (
    <Box px={["4", "8", "16"]}>
      <Header />
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
    </Box>
  );
};
export default Page;
