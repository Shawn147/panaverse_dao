"use client";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
const renderComp = (item: string, index: number) => (
  <Flex pt={"8"} w={["100%", "100%", "50%"]} key={index.toString()}>
    <Image boxSize="6" objectFit={"contain"} src="/check.webp" alt="Check" />
    <Text fontSize={["lg", "xl", "xl"]} ml={"2"}>
      {item}
    </Text>
  </Flex>
);
const HeroPoster = () => (
  <Flex flex={1} alignItems={"center"} wrap={["wrap", "wrap", "nowrap"]}>
    <Box mr={["4", "8", "16"]} ml={["2", "4", "6"]}>
      <Image
        boxSize="3xl"
        objectFit={"contain"}
        src="/female.webp"
        alt="Hero Poster"
      />
    </Box>
    <Box flex={1}>
      <Heading mt={"5"} size={["lg", "xl", "2xl"]}>
        The Outcome for Participants of the Program
      </Heading>
      <Text mt={"5"}>
        As a graduate of this program, you will own valuable products such as
        Full-Stack App Templates, AR and VR Experiences, and APIs that are
        marketed globally by the Panaverse DAO. You will also have the
        opportunity to offer your services at a rate of $50 per hour, providing
        a path to financial stability while contributing to the growth of
        Pakistans software exports.
      </Text>
      <Flex wrap={"wrap"}>
        {[
          "Product Ownership",
          "Freelacing",
          "Global Marketing by DAO",
          "Boosting Economy",
        ].map(renderComp)}
      </Flex>
    </Box>
  </Flex>
);
export default HeroPoster;
