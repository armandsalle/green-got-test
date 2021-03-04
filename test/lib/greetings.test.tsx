import { capitalizeTests, greetingsTests } from '../__mocks__/fileMock'

import { greetings, capitalize } from '../../lib/greetings'

describe('Greeetings', () => {
  it('should capitalize the first letter and lowercase the rest', () => {
    capitalizeTests.forEach((t) =>
      expect(capitalize(t.params)).toEqual(t.result)
    )
  })

  it('should retun hello followed by a name', () => {
    greetingsTests.forEach((t) => {
      expect(greetings(t.params)).toEqual(t.result)
    })
  })
})
