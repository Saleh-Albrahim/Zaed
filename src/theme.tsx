import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: () => ({
    body: {
      color: 'black',
      bg: 'white',
      backgroundImage: "url('./img/pattren.png')",
    },
    input: {
      fontSize: 'large',
    },
  }),
};

const theme = extendTheme({
  styles,
  fonts: {
    heading: 'Tajawal',
    body: 'Tajawal',
  },
});

theme.shadows.outline = 'black';

export default theme;
