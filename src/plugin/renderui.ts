/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import plugin from 'tailwindcss/plugin'

import { RENDER_UI_DEFAULT_CONFIG } from './constants/constants'
import { RenderUIVariableConfig } from './types/types'
import { cssVariables, flattenColors, getColorVariables, mergeThemeProperties } from './utils/utils'

// @TODO, find all colors and treat them same as color/bgcolor

const renderui = (variableConfig: RenderUIVariableConfig = RENDER_UI_DEFAULT_CONFIG) => {
  const { root = {}, dark = {}, light = {}, system = {} } = variableConfig

  const mergedThemes = mergeThemeProperties({ root, dark, light, system })

  const {
    screens,
    spacing,
    maxWidth,
    borderRadius,
    boxShadow,
    ringWidth,
    ringOffsetWidth,
    scale,
    transitionDuration,
    keyframes,
    animation,
    textShadow,
    colors = {},
    ...restProperties
  } = mergedThemes

  const rgbaColors = getColorVariables(colors as any)

  return plugin(
    ({ addUtilities, addBase }) => {
      addBase({
        ':root': {
          ...cssVariables(flattenColors(root)),
          '--timing-function': 'cubic-bezier(0.16, 1, 0.3, 1)',
          '--duration-fast': '150ms',
          '--duration-fast-medium': '200ms',
          '--duration-faster-medium': '250ms',
          '--duration-medium': '300ms',
          '--duration-medium-slow': '350ms',
          '--duration-medium-slower': '400ms',
          '--duration-slow': '450ms',
        },
        '.light': { ...cssVariables(flattenColors(light)) },
        '.dark': { ...cssVariables(flattenColors(dark)) },
        '.system': { ...cssVariables(flattenColors(system)) },
      })

      addUtilities({
        '.grow-children > *': {
          flex: '1 1 0%',
        },
        '.center': {
          alignItems: 'center',
          justifyContent: 'center',
        },
        'translate-z-0': {
          transform: 'translateZ(0)',
        },
      })
    },
    {
      theme: {
        screens: () => ({
          ...screens,
        }),
        extend: {
          spacing: () => ({
            ...spacing,
          }),
          maxWidth: () => ({
            ...maxWidth,
          }),
          colors: () => ({
            ...rgbaColors,
          }),
          borderRadius: () => ({
            ...borderRadius,
          }),
          boxShadow: () => ({
            ...boxShadow,
          }),
          textShadow: () => ({
            ...textShadow,
          }),
          ringWidth: () => ({
            ...ringWidth,
          }),
          ringOffsetWidth: () => ({
            ...ringOffsetWidth,
          }),
          scale: () => ({
            ...scale,
          }),
          transitionDuration: () => ({
            ...transitionDuration,
          }),
          keyframes: () => ({
            ...keyframes,
          }),
          animation: () => ({
            ...animation,
          }),
          ...restProperties,
        },
      },
    },
  )
}

export { renderui }
