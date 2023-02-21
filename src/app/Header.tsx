import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  StackProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" {...rest}>
      <Button>{children}</Button>
    </HStack>
  );
};
const Header = () => (
  <Flex
    height={"100"}
    width="100"
    bgColor={"aliceblue"}
    direction={"row"}
    alignItems={"center"}
    justifyContent={"space-between"}
    px={"10"}
  >
    <Image height={"10"} width="10" src="/favicon.ico" alt="Logo" />
    <Tabs>
      <TabList>
        <Tab px={"12"}>Home</Tab>
        <Tab px={"12"}>Courses</Tab>
        <Tab px={"12"}>About</Tab>
        <Tab px={"12"}>Contact</Tab>
      </TabList>
    </Tabs>
  </Flex>
);
export { Header };
