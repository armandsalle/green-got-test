import {
  capitalizeTests,
  greetingsTests,
  hasNumberTests,
  createCapitalizedNamesTests,
} from '../__mocks__/fileMock'

import {
  greetings,
  capitalize,
  hasNumber,
  createCapitalizedNames,
} from '../../lib/greetings'

describe('Greeetings', () => {
  it('should test if a string contains numbers', () => {
    hasNumberTests.forEach((t) => expect(hasNumber(t.params)).toEqual(t.result))
  })

  it('should capitalize the first letter of a string and lowercase the rest', () => {
    capitalizeTests.forEach((t) =>
      expect(capitalize(t.params)).toEqual(t.result)
    )
  })

  it('should return all the names with the first letter capitalize', () => {
    createCapitalizedNamesTests.forEach((t) =>
      expect(createCapitalizedNames(t.params)).toEqual(t.result)
    )
  })

  it('should retun Hello followed by a name', () => {
    greetingsTests.forEach((t) => {
      expect(greetings(t.params)).toEqual(t.result)
    })
  })
})
