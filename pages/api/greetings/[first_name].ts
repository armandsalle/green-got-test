import { NextApiRequest, NextApiResponse } from 'next'
import { greetings } from '../../../lib/greetings'

const handleGet = (req: NextApiRequest, res: NextApiResponse): void => {
  const { query } = req

  const firstNameExist: boolean = Object.prototype.hasOwnProperty.call(
    query,
    'first_name'
  )

  if (firstNameExist) {
    const firstName = query['first_name']
    const result = greetings(firstName.toString())
    res.status(200).json(result)
  } else {
    res.status(400).end('Bad request, missing first_name parameter')
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
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
