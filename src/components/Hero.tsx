"use client";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
const HeroPoster = () => (
  <Flex wrap={["wrap", "wrap", "nowrap"]}>
    <Box flex={1} mr={["4", "8", "16"]} ml={["2", "4", "6"]}>
      <Text fontSize={"md"} fontWeight={"semibold"} mt={"5"} color={"#01606B"}>
        Presendential Initiative for Artificial Intelligence and Cloud Computing
        (PIAIC)
      </Text>
      <Heading mt={"5"} size={["xl", "2xl", "4xl"]}>
        Certified Web 3.0 and Metaverse Developer
      </Heading>
      <Text mt={"5"}>
        A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting
        Ready for the Next Generation of the Internet
      </Text>
      <Text mt={"5"}>
        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
        Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
        Technologies
      </Text>
      <Button
        mt={"5"}
        p={"6"}
        bgColor={"primary.700"}
        color={"primary.100"}
        fontSize={"xl"}
        borderRadius={"3xl"}
      >
        Enroll Now
      </Button>
    </Box>
    <Box mx={["4", "8", "16"]}>
      <Image
        boxSize="xl"
        objectFit={"contain"}
        src="/heroPoster.webp"
        alt="Hero Poster"
      />
    </Box>
  </Flex>
);
export default HeroPoster;
