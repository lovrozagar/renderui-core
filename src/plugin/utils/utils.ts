import { ThemeConfig } from '@/plugin/types/types'

const flattenColors = (object: Record<string, any>): Record<string, string> => {
  // Check if 'colors' key exists at the top level
  if (
    !Object.prototype.hasOwnProperty.call(object, 'colors') ||
    typeof object.colors !== 'object'
  ) {
    return {}
  }

  return Object.keys(object.colors).reduce((accumulator: Record<string, string>, key: string) => {
    if (typeof object.colors[key] === 'object') {
      const flattenedSubObject = flattenColors({ colors: object.colors[key] })

      Object.keys(flattenedSubObject).forEach((subKey) => {
        // If the subKey is 'DEFAULT', use the parent key instead
        const finalKey = subKey === 'DEFAULT' ? key : `${key}-${subKey}`

        accumulator[finalKey] = flattenedSubObject[subKey]
      })
    } else {
      accumulator[key] = object.colors[key]
    }

    return accumulator
  }, {})
}

const cssVariables = (variables: Record<string, string> = {}) =>
  Object.keys(variables).reduce(
    (accumulator, key) => {
      accumulator[`--${key}`] = variables[key]

      return accumulator
    },
    {} as Record<string, string>,
  )

const mergeThemeProperties = (themes: Record<string, ThemeConfig>): ThemeConfig => {
  const result: Record<string, any> = {}

  Object.keys(themes).forEach((themeKey) => {
    const theme = themes[themeKey] as Record<string, any>

    if (!theme) return

    Object.keys(theme).forEach((propertyKey) => {
      if (result[propertyKey]) {
        Object.keys(theme[propertyKey]).forEach((subPropertyKey) => {
          if (!result[propertyKey][subPropertyKey]) {
            result[propertyKey][subPropertyKey] = theme[propertyKey][subPropertyKey]
          }
        })
      } else {
        result[propertyKey] = { ...theme[propertyKey] }
      }
    })
  })

  return result
}

const getColorVariables = (colors: Record<string, string>) =>
  Object.entries(colors).reduce((accumulator: Record<string, string>, [key]) => {
    accumulator[key] = `rgba(var(--${key}))`

    return accumulator
  }, {})

// const getDefaultBorderRadiusVariable = (borderRadius: Record<string, string>) => {
//   Object.entries(borderRadius).reduce((accumulator: Record<string, string>, [key]) => {
//     accumulator[key] = `var(--${key})`

//     return accumulator
//   }, {})
// }

export { cssVariables, flattenColors, getColorVariables, mergeThemeProperties }
