"use client";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
const TrackCard = (item: any, index: number) => (
  <Flex
    width={["sm", "sm", "md"]}
    borderBottomWidth={1}
    mt={"4"}
    key={index.toString()}
  >
    <Box height={"24"} width={"32"}>
      <Img
        borderRadius={"12"}
        objectFit={"cover"}
        src={item.img}
        alt="Hero Poster"
      />
    </Box>
    <Box flex={1} ml={"3"}>
      <Text fontSize={"md"} fontWeight={"semibold"} color={"#01606B"}>
        Specialized
      </Text>
      <Text mt={"1"} size={["xs", "xs", "sm"]}>
        {item.title}
      </Text>
    </Box>
  </Flex>
);
export default TrackCard;
