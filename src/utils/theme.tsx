import { extendTheme } from "@chakra-ui/theme-utils";

const setting = {
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      400: "#F0FAF2",
      500: "#39B54A",
    },
  },
  styles: {
    global: {
      body: {
        color: "#636363",
        fontFamily: `'Poppins', sans-serif`,
      },
      'h1, h2, h3, h4, h5, h6': {
        color: 'black',
      },
    },
  },
  components: {
    Button: {
      variants: {
        custom: {
          borderRadius: '30px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          padding: 6,
          color: 'white',
          bg: 'brand.500',
          _hover: {
            bg: 'brand.500',
          },
          _loading: {
            bg: 'brand.500',
          },
        },
      },
    },
  },
};

const theme = extendTheme(setting);

export default theme;
