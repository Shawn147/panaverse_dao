"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
const QuarterCard = (item: any, index: number) => (
  <Box
    width={["sm", "sm", "md"]}
    p={"8"}
    key={index.toString()}
    borderWidth={1}
    boxShadow="sm"
    borderRadius={["md", "lg", "lg"]}
  >
    <Heading size={["xs", "sm", "md"]}>{item.quarter}</Heading>
    <Text mt={"2"} size={["xs", "xs", "sm"]}>
      {item.description}
    </Text>
  </Box>
);
export default QuarterCard;
