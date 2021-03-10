export const checkObjectProperty = (
  obj: Record<string, unknown>,
  key: string
): boolean => {
  if (typeof obj !== 'object') {
    return false
  } else {
    return Object.prototype.hasOwnProperty.call(obj, key)
  }
}
