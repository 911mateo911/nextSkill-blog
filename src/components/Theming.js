import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: 'transparent',
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: "#6EE7B7",
      link: colors.blue,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: "transparent",
      text: colors.white,
      bodyBg: colors.black,
      headerBg: "#6EE7B7",
      link: lighten(0.05, colors.blue),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
