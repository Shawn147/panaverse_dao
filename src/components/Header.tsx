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
        fontWeight={"medium"}
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
    width="100%"
    justifyContent={"space-between"}
    px={["4", "16", "20"]}
    bgColor={"rgba(255,255,255,0.5)"}
    as="header"
    position="fixed"
    backgroundColor="rgba(255, 255, 255, 0.8)"
    backdropFilter="saturate(180%) blur(5px)"
  >
    <Image
      height={"100%"}
      width={"28"}
      objectFit={"contain"}
      src="/dao.webp"
      alt="Logo"
    />
    <Flex justifyContent={"space-between"} maxWidth={400} flex={0.8}>
      <ListItem routeName={"./home"}>HOME</ListItem>
      <ListItem routeName={"./courses"}>COURSES</ListItem>
    </Flex>
  </Flex>
);
export default Header;
