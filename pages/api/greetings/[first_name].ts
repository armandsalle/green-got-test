import { NextApiRequest, NextApiResponse } from 'next'
import { greetings } from '@/lib/greetings'
import { cehckObjectProperty } from '@/utils/checkObjectProperty'

const handleGet = (req: NextApiRequest, res: NextApiResponse): void => {
  const { query } = req

  res.setHeader('Content-Type', 'application/json')

  const isFirstNameExist: boolean = cehckObjectProperty(query, 'first_name')

  if (isFirstNameExist) {
    const firstName = query['first_name']
    const { message, error } = greetings(firstName.toString())

    if (!error) {
      res.status(200).json({ payload: message })
    } else {
      res.status(422).json({
        status: 422,
        message,
      })
    }
  } else {
    res.status(422).json({
      status: 422,
      message: 'Bad request, missing a valid first name parameter',
    })
  }
}

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { method } = req

  switch (method) {
    case 'GET':
      handleGet(req, res)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).json({
        status: 405,
        message: `Method ${method} Not Allowed`,
      })
  }
}

export default handler
