import {
  capitalizeTests,
  greetingsTests,
  isTextWellFormatedTests,
} from '../__mocks__/fileMock'

import { greetings, capitalize, isTextWellFormated } from '../../lib/greetings'

describe('Greeetings', () => {
  it('should test if a string is good', () => {
    isTextWellFormatedTests.forEach((t) =>
      expect(isTextWellFormated(t.params)).toEqual(t.result)
    )
  })

  it('should capitalize the first letter of a string and lowercase the rest', () => {
    capitalizeTests.forEach((t) =>
      expect(capitalize(t.params)).toEqual(t.result)
    )
  })

  it('should retun Hello followed by a name', () => {
    greetingsTests.forEach((t) => {
      expect(greetings(t.params)).toEqual(t.result)
    })
  })
})
