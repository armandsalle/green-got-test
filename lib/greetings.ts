interface greetingsOptions {
  message: string
  error: string | boolean
}

export const capitalize = (s: string): string => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export const greetings = (firstName: string): greetingsOptions => {
  if (typeof firstName !== 'string')
    return {
      message: 'Please provide a string as paramater for greetings(firstName)',
      error: true,
    }

  if (firstName.length === 0)
    return {
      message: 'Hello Anonymous',
      error: false,
    }

  const computedFirstName = capitalize(firstName.trim())

  return {
    message: `Hello ${computedFirstName}`,
    error: false,
  }
}
