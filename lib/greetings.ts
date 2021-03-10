import { isTextWellFormated } from '@/utils/isTextWellFormated'

export interface greetingsOptions {
  message: string
  error: boolean
}

export const capitalize = (s: string): string => {
  // Example of the regex here: https://regexr.com/5nthl
  if (typeof s !== 'string') return ''

  return s
    .trim()
    .toLowerCase()
    .replace(/(^[A-zÀ-ú]{1})|([-\s]{1}[A-zÀ-ú]{1})/g, (match) =>
      match.toUpperCase()
    )
}

export const greetings = (firstName: string): greetingsOptions => {
  if (typeof firstName !== 'string' || !isTextWellFormated(firstName))
    return {
      message: 'Please provide a valid string',
      error: true,
    }

  if (firstName.length === 0)
    return {
      message: 'Hello Anonymous',
      error: false,
    }

  const computedName = capitalize(firstName)

  return {
    message: `Hello ${computedName}`,
    error: false,
  }
}
