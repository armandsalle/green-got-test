import { isTextWellFormatedTests } from '../__mocks__/fileMock'
import { checkObjectProperty } from '../../utils/checkObjectProperty'

import { isTextWellFormated } from '../../utils/isTextWellFormated'

describe('Utils', () => {
  it('should test if a string is good', () => {
    isTextWellFormatedTests.forEach((t) =>
      expect(isTextWellFormated(t.params)).toEqual(t.result)
    )
  })

  it('should check if a property exist on an object', () => {
    expect(checkObjectProperty({ prop: true }, 'prop')).toBe(true)
    expect(checkObjectProperty({ prop: true }, 'test')).toBe(false)
    expect(checkObjectProperty({}, 'test')).toBe(false)
    expect(checkObjectProperty(undefined, 'test')).toBe(false)
    expect(checkObjectProperty('test' as any, 'test')).toBe(false)
  })
})
