"use client";
import { quarter45 } from "@/contents";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import QuarterCard from "./QuarterCard";
import TrackCard from "./TrackCard";
const SpecializedTracks = () => (
  <Flex wrap={["wrap", "wrap", "nowrap"]}>
    <Box>
      <Heading mt={"2"} size={["md", "lg", "xl"]}>
        Specialized Tracks:
      </Heading>
      <Text mt={"2"}>
        After completing the first three quarters the participants will select
        one or more specializations consisting of two courses each:
      </Text>
      <Box borderWidth={1} my={"6"} p={["4", "8"]}>
        <Text
          fontSize={"md"}
          fontWeight={"semibold"}
          mt={"5"}
          color={"#01606B"}
        >
          Specialized Program
        </Text>
        <Heading mt={"5"} size={["xl", "2xl", "4xl"]}>
          Web 3.0 (Blockchain) and Metaverse Specialization
        </Heading>
        <Text mt={"5"}>
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </Text>
        <Button
          mt={"5"}
          p={"5"}
          bgColor={"primary.100"}
          borderColor={"primary.700"}
          borderWidth={1}
          color={"primary.700"}
          fontSize={"xl"}
          borderRadius={"xl"}
        >
          {"Learn More >"}
        </Button>
        <Flex mt={"6"} gap={"6"} wrap={["wrap", "wrap", "nowrap"]}>
          {quarter45.map(QuarterCard)}
        </Flex>
      </Box>
    </Box>
    <Box>{quarter45.map(TrackCard)}</Box>
  </Flex>
);
export default SpecializedTracks;
