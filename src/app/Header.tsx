import { Link } from "@chakra-ui/next-js";
import { Flex, HStack, Image, StackProps } from "@chakra-ui/react";
interface Props extends StackProps {
  routeName: string;
}
const ListItem = (props: Props) => {
  const { children, routeName, ...rest } = props;
  return (
    <HStack flex={1} as="li" {...rest}>
      <Link
        fontSize={[11, 13, 20]}
        color={"black"}
        fontWeight={"bold"}
        textAlign={"center"}
        flex={1}
        href={routeName}
        _hover={{ color: "blue.500" }}
      >
        {children}
      </Link>
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
    <Flex flex={0.2}>
      <Image objectFit={"contain"} src="/dao.webp" alt="Logo" />
    </Flex>
    <Flex justifyContent={"space-between"} maxWidth={400} flex={0.8}>
      <ListItem routeName={"./home"}>HOME</ListItem>
      <ListItem routeName={"./courses"}>COURSES</ListItem>
    </Flex>
  </Flex>
);
export { Header };
