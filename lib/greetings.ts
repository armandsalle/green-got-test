interface greetingsOptions {
  message: string
  error: string | boolean
}

export const hasNumber = (myString: string): boolean => {
  return /\d/.test(myString)
}

export const capitalize = (s: string): string => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export const createCapitalizedNames = (s: string): string => {
  return s
    .trim()
    .split(' ')
    .map((name) => capitalize(name))
    .join(' ')
}

export const greetings = (firstName: string): greetingsOptions => {
  if (typeof firstName !== 'string' || hasNumber(firstName))
    return {
      message: 'Please provide a string, without numbers',
      error: true,
    }

  if (firstName.length === 0)
    return {
      message: 'Hello Anonymous',
      error: false,
    }

  const computedName = createCapitalizedNames(firstName)

  return {
    message: `Hello ${computedName}`,
    error: false,
  }
}
