export const isTextWellFormated = (myString: string): boolean => {
  return /^[A-zÀ-ú- ]*$/.test(myString)
}
