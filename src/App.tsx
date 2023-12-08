import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import ProductPage from "./components/Product";
import theme from "./utils/theme";

function App() {
  // return <Carousel />
  return (
    <ChakraProvider theme={theme}>
      <ProductPage />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
