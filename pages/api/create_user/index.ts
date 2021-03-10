import { createUser } from '@/lib/createUser'
import { cehckObjectProperty } from '@/utils/checkObjectProperty'
import { NextApiRequest, NextApiResponse } from 'next'

const sendParamError = (res, message) =>
  res.status(422).json({
    status: 422,
    message,
  })

const handlePost = (req: NextApiRequest, res: NextApiResponse): void => {
  const { body } = req

  res.setHeader('Content-Type', 'application/json')

  const isFirstNameExist: boolean = cehckObjectProperty(body, 'firstName')
  const isLastNameExist: boolean = cehckObjectProperty(body, 'lastName')

  if (isFirstNameExist && isLastNameExist) {
    const firstName = body['firstName']
    const lastName = body['lastName']

    const result = createUser(firstName.toString(), lastName.toString())

    if (!result.error) {
      res.status(200).json({
        payload: {
          firstName: result.firstName,
          lastName: result.lastName,
        },
      })
    } else {
      res.status(422).json({
        status: 422,
        message: result.message,
      })
    }
  } else if (!isFirstNameExist && !isLastNameExist) {
    sendParamError(res, 'Bad request, missing first and last name parameters.')
  } else if (!isFirstNameExist) {
    sendParamError(res, 'Bad request, missing first name parameters.')
  } else if (!isLastNameExist) {
    sendParamError(res, 'Bad request, missing last name parameters.')
  } else {
    sendParamError(res, 'Bad request, missing first and last name parameters.')
  }
}

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { method } = req

  switch (method) {
    case 'POST':
      handlePost(req, res)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).json({
        status: 405,
        message: `Method ${method} Not Allowed`,
      })
  }
}

export default handler
