import { isTextWellFormated } from '@/utils/isTextWellFormated'

export interface createUserOptions {
  firstName: string
  lastName: string
  message: string
  error: string | boolean
}

export const createUser = (
  firstName: string,
  lastName: string
): createUserOptions => {
  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    !isTextWellFormated(firstName) ||
    !isTextWellFormated(lastName) ||
    firstName.length === 0 ||
    lastName.length === 0
  )
    return {
      firstName: '',
      lastName: '',
      message: 'Please provide a valid strings for the first and last name',
      error: true,
    }

  return {
    firstName: firstName.toUpperCase(),
    lastName: lastName.toUpperCase(),
    message: '',
    error: false,
  }
}
