import { background, extendTheme, textDecoration, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      _selection: {
        // background: 'pink.800',
      },
      body: {
        color: 'black',
        fontWeight: 'normal',
        // background: 'yellow.25',
      },
      h2: {
        fontWeight: '700 !important',
      },
    },
  },
  fonts: {
    heading: `BasisGrotesquePro, ${base.fonts?.heading}`,
    body: `BasisGrotesquePro, ${base.fonts?.body}`,
  },
  fontWeights: {
    normal: 500,
    medium: 700,
    bold: 800,
    bolder: 900,
  },
  components: {
    Skeleton: {
      text: {
        border: '1px solid black',
      },
      baseStyle: {
        border: '1px solid black',
      },
      border: '1px solid black',
    },
    Modal: {
      baseStyle: {
        dialogContainer: {
          '@supports(height: -webkit-fill-available)': {},
          alignItems: {
            base: 'start',
            md: 'center',
          },
        },
        overlay: {
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
    Button: {
      variants: {
        outline: {
          borderWidth: '1px',
          borderColor: 'black',
          _focus: {
            outlineColor: 'rgba(0, 0, 0, .05)',
            boxShadow: '0 0 0 3px rgba(0, 0, 0,.25)',
          },
          _active: {
            background: 'rgba(255,255,255,.75)',
            outline: 'none',
          },
          _hover: {
            background: 'rgba(255,255,255,.55)',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        // field: {
        //   border: 'unset',
        //   borderWidth: '2px',
        //   borderStyle: 'solid',
        //   borderColor: 'primary.accent2'
        // }
        field: {
          fontWeight: 500,
          borderWidth: '1px !important',
          ':hover': {
            borderColor: 'rgba(150, 155, 171, 1) !important',
          },
          ':focus': {
            borderColor: 'black !important',
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        fontWeight: 500,
        borderWidth: '2px !important',
        ':hover': {
          borderColor: 'rgba(150, 155, 171, 1) !important',
        },
        ':focus': {
          borderColor: 'black !important',
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          borderColor: 'black',
          borderWidth: '2px',
        },
        item: {
          fontWeight: 500,
          _focus: {
            background: 'transparent',
          },
          _hover: {
            background: 'transparent',
          },
        },
      },
    },
    Popover: {
      baseStyle: {
        content: {
          borderColor: 'black',
          borderWidth: '2px',
          _focus: {
            outline: 'none',
            boxShadow: '4px 4px 0px rgba(24, 25, 31, 1)',
          },
          boxShadow: '4px 4px 0px rgba(24, 25, 31, 1)',
        },
      },
    },
    Tooltip: {
      baseStyle: {
        // content: {
        background: 'black',
        // },
      },
    },
    Accordion: {
      baseStyle: {
        border: 'none',
        container: {
          border: 'none',
        },
        button: {
          _hover: {
            background: 'transparent',
          },
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
  colors: {
    ...base.colors,
    yellow: 'rgba(255, 189, 18, 1)',
    'yellow.800': 'rgba(255, 212, 101,1)',
    'yellow.100': 'rgba(255, 244, 204, 1)',
    'yellow.50': 'rgba(255, 250, 229, 1)',
    'yellow.25': 'rgba(255, 253, 242, 1)',
    blue: 'rgba(91, 117, 255, 1)',
    'blue.800': 'rgba(128, 148, 255, 1)',
    'blue.100': 'rgba(233, 231, 252, 1)',
    white: 'rgba(255, 255, 255, 1)',
    pink: 'rgba(241, 54, 231, 1)',
    'pink.800': 'rgba(248, 135, 242, 1)',
    'pink.200': 'rgba(255, 207, 252, 1)',
    black: 'rgba(24, 25, 31, 1)',
    'black.800': 'rgba(71, 74, 87, 1)',
    'black.300': 'rgba(159, 164, 180, 1)',
    'black.700': 'rgba(150, 155, 171, 1)',
    'black.200': 'rgba(238, 239, 244, 1)',
    'black.100': 'rgba(244, 245, 247, 1)',
    // black: {
    //   50: '#f1f1f9',
    //   100: '#d4d5de',
    //   200: '#b8b9c4',
    //   300: '#9b9ead',
    //   400: '#7f8296',
    //   500: '#65687c',
    //   600: '#4f5162',
    //   700: '#393a46',
    //   800: '#21232b',
    //   900: '#080c13',
    // },
    'green.50': '#d7fffc',
    'green.100': '#abfff4',
    'green.200': '#7affed',
    'green.300': '#48ffe6',
    'green.400': '#1affdf',
    'green.500': '#00e6c5',
    'green.600': '#00b39a',
    'green.700': '#00806e',
    'green.800': '#004e42',
    'green.900': '#001c16',
    red: {
      50: '#ffe6e1',
      100: '#ffbcb1',
      200: '#ff9281',
      300: '#fd674f',
      400: '#fb3d1e',
      500: '#fd674f', //#e12304
      600: '#b01a02',
      700: '#7e1100',
      800: '#4e0800',
      900: '#200000',
    },
  },
})

export default theme
