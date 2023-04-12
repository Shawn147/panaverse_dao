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
const Footer = () => {
  const renderCourses = (item: any, index: number) => (
    <Text
      fontSize={"sm"}
      py={"0.5"}
      color={"primary.200"}
      key={index.toString()}
    >
      {item}
    </Text>
  );
  const renderContact = (item: any, index: number) => (
    <Text fontSize={"lg"} color={"primary.200"} key={index.toString()}>
      {item}
    </Text>
  );
  const renderSocial = (item: any, index: number) => (
    <Flex py={"1"}>
      <Image src={item.icon} />
      <Text
        fontSize={"md"}
        ml={"4"}
        color={"primary.200"}
        key={index.toString()}
      >
        {item.title}
      </Text>
    </Flex>
  );
  return (
    <Flex
      borderTopRadius={"xl"}
      flexWrap={["wrap", "wrap", "nowrap"]}
      px={"8"}
      pb={"12"}
      bgColor={"primary.900"}
      mt={"16"}
    >
      <Box mt={"8"} mr={["4", "8", "16"]}>
        {[
          "Home",
          "About",
          "Blockchain",
          "Web 3 & Metaverse",
          "Cloud Native & Web App Computing",
          "Internet of things & ai",
          "Artificial Intelligence",
        ].map(renderCourses)}
      </Box>
      <Box mt={"8"} mx={["4", "8", "16"]}>
        <Text
          fontSize={"lg"}
          mb={"3"}
          fontWeight={"semibold"}
          color={"primary.100"}
        >
          {"Follow Us:"}
        </Text>
        {[
          { title: "Facebook", icon: "/facebook.svg" },
          { title: "Instagram", icon: "/instagram.svg" },
          { title: "LinkedIn", icon: "/linkedin.svg" },
          { title: "Twitter", icon: "/twitter.svg" },
        ].map(renderSocial)}
      </Box>
      <Box mt={"8"} mx={["4", "8", "16"]}>
        <Text
          fontSize={"lg"}
          mb={"3"}
          fontWeight={"semibold"}
          color={"primary.100"}
        >
          {"Contact Us:"}
        </Text>
        {["+923123123123", "baigshahan@gmail.com"].map(renderContact)}
      </Box>
    </Flex>
  );
};
export default Footer;
