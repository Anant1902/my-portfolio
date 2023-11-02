import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  container: defineStyle({
    boxShadow: "sm",
    _focus: {
      boxShadow: "outline",
    },
  }),
  button: defineStyle({
    borderBottom: `1px solid white`,  // Separate rows with a white line
  }),
});

const outline = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      border: "none",
    },
    button: {
      _hover: {
        color: "gray.600",
      },
      _focus: {
        color: "blue.500",
      },
      fontFamily: "mono",
      fontSize: "5xl",  // Large font size
      fontWeight: "bold",  // Bold font weight
    },
  };
});

const variants = {
  outline,
};

const size = {
  md: defineStyle({
    w: 5,
    h: 5,
  }),
};

const sizes = {
  md: definePartsStyle({
    icon: size.md,
  }),
};

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});