import { ChakraProvider } from "@chakra-ui/provider";
import Footer from "./components/Footer";
import ProductPage from "./components/Product";
import theme from "./utils/theme";

function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <ProductPage />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
