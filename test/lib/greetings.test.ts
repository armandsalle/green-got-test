import { capitalizeTests, greetingsTests } from '../__mocks__/fileMock'
import handler from '../../pages/api/greetings/[firstName]'
import { createMocks } from 'node-mocks-http'
import { greetings, capitalize } from '../../lib/greetings'

describe('Greeetings', () => {
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

describe('/api/greetings/[first_name]', () => {
  it('should return a message with hello follow by my name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        firstName: 'armand',
      },
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        payload: 'Hello Armand',
      })
    )
  })

  it('should return an 422 error', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(422)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        status: 422,
        message: 'Bad request, missing a valid first name parameter',
      })
    )
  })

  it('should return an 422 error', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        firstName: '3',
      },
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(422)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        status: 422,
        message: 'Please provide a valid string',
      })
    )
  })
})
