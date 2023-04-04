"use client";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
const TrackCard = (item: any, index: number) => (
  <Flex
    width={["sm", "sm", "md"]}
    borderBottomWidth={1}
    mt={"4"}
    key={index.toString()}
    borderRadius={["md", "lg", "lg"]}
  >
    <Image
      boxSize="120"
      objectFit={"contain"}
      src="/net.jpeg"
      alt="Hero Poster"
    />
    <Box ml={"3"}>
      <Heading size={["xs", "sm", "md"]}>{item.quarter}</Heading>
      <Text mt={"2"} size={["xs", "xs", "sm"]}>
        {item.description}
      </Text>
    </Box>
  </Flex>
);
export default TrackCard;
