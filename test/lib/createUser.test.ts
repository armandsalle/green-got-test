import { createUser } from '../../lib/createUser'
import handler from '../../pages/api/create_user/'
import { createMocks } from 'node-mocks-http'

const errorObject = {
  firstName: '',
  lastName: '',
  message: 'Please provide a valid strings for the first and last name',
  error: true,
}

describe('Greeetings', () => {
  it('should return an object with a first and a last name fully capitalized', () => {
    expect(createUser('armand', 'salle')).toEqual({
      firstName: 'ARMAND',
      lastName: 'SALLE',
      message: '',
      error: false,
    })
    expect(createUser('ARMANd', 'salLe')).toEqual({
      firstName: 'ARMAND',
      lastName: 'SALLE',
      message: '',
      error: false,
    })
    expect(createUser('àö', 'salLe')).toEqual({
      firstName: 'ÀÖ',
      lastName: 'SALLE',
      message: '',
      error: false,
    })
    expect(createUser('', 'salle')).toEqual(errorObject)
    expect(createUser('', '')).toEqual(errorObject)
    expect(createUser('armand', '')).toEqual(errorObject)
    expect(createUser('ar3mand', '12')).toEqual(errorObject)
    expect(createUser('<p>armand</p>', 'salle')).toEqual(errorObject)
  })
})

describe('/api/create_user', () => {
  it('should post and return a new user', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        firstName: 'armand',
        lastName: 'salle',
      },
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        payload: {
          firstName: 'ARMAND',
          lastName: 'SALLE',
        },
      })
    )
  })

  it('should return an 422 error', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        firstName: 'arman3d',
        lastName: 'salle',
      },
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(422)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        status: 422,
        message: 'Please provide a valid strings for the first and last name',
      })
    )
  })

  it('should return an 422 error', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        firstName: 'armand',
      },
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(422)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        status: 422,
        message: 'Bad request, missing last name parameters.',
      })
    )
  })
})
