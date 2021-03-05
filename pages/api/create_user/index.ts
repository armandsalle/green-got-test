import { createUser } from '@/lib/createUser'
import { cehckObjectProperty } from '@/utils/checkObjectProperty'
import { NextApiRequest, NextApiResponse } from 'next'

const handlePost = (req: NextApiRequest, res: NextApiResponse): void => {
  const { body } = req

  const isFirstNameExist: boolean = cehckObjectProperty(body, 'firstName')
  const isLastNameExist: boolean = cehckObjectProperty(body, 'lastName')

  if (isFirstNameExist && isLastNameExist) {
    const firstName = body['firstName']
    const lastName = body['lastName']

    const result = createUser(firstName.toString(), lastName.toString())

    res.status(200).json(result)
  } else {
    res
      .status(400)
      .end(
        'Bad request, missing parameters. This route needs a JSON object with a first and a last name as strings.'
      )
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
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
