// app/layout.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const colors = {
    primary: {
      900: "#202F39",
      800: "#153e75",
      700: "#01606B",
      200: "#D0D4D9",
      100: "#FFFFFF",
    },
  };

  const theme = extendTheme({ colors });
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
