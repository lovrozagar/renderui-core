import { Config } from 'tailwindcss/types/config'

type ThemeConfig = Config['theme']

type RenderUIVariableConfig = {
  root?: ThemeConfig
  light?: ThemeConfig
  dark?: ThemeConfig
  system?: ThemeConfig
}

export type { RenderUIVariableConfig, ThemeConfig }
