import { isTextWellFormatedTests } from '../__mocks__/fileMock'
import { cehckObjectProperty } from '../../utils/checkObjectProperty'

import { isTextWellFormated } from '../../utils/isTextWellFormated'

describe('Utils', () => {
  it('should test if a string is good', () => {
    isTextWellFormatedTests.forEach((t) =>
      expect(isTextWellFormated(t.params)).toEqual(t.result)
    )
  })

  it('should check if a property exist on an object', () => {
    expect(cehckObjectProperty({ prop: true }, 'prop')).toBe(true)
    expect(cehckObjectProperty({ prop: true }, 'test')).toBe(false)
    expect(cehckObjectProperty({}, 'test')).toBe(false)
    expect(cehckObjectProperty(undefined, 'test')).toBe(false)
    expect(cehckObjectProperty('test' as any, 'test')).toBe(false)
  })
})
