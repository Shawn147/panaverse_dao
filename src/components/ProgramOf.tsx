"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
const ProgramOfStudies = () => (
  <Box flex={1} mr={["4", "8", "16"]} ml={["2", "4", "6"]}>
    <Text
      fontSize={"md"}
      fontWeight={"semibold"}
      mt={"5"}
      color={"primary.700"}
    >
      PROGRAM OF STUDIES
    </Text>
    <Heading mt={"2"} size={["md", "lg", "xl"]}>
      Core Courses
    </Heading>
    <Heading size={["md", "lg", "xl"]}>
      (Common in All Specializations):
    </Heading>

    <Text mt={"5"}>
      Every participant of the program will start by completing the following
      three core courses:
    </Text>

    <Button
      mt={"5"}
      p={"6"}
      bgColor={"primary.700"}
      color={"primary.100"}
      fontSize={"xl"}
      borderRadius={"3xl"}
    >
      Learn More
    </Button>
  </Box>
);
export default ProgramOfStudies;
