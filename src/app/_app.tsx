import { ChakraProvider } from "@chakra-ui/react";
interface Props {
  Component: () => JSX.Element;
  pageProps: any;
}
const MyApp = ({ Component, pageProps }: Props) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
