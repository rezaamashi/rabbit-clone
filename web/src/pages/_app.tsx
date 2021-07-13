import { ChakraProvider, theme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
