import { NextApiRequest, NextApiResponse } from 'next'
import { greetings } from '@/lib/greetings'
import { cehckObjectProperty } from '@/utils/checkObjectProperty'

const handleGet = (req: NextApiRequest, res: NextApiResponse): void => {
  const { query } = req

  const isFirstNameExist: boolean = cehckObjectProperty(query, 'first_name')

  if (isFirstNameExist) {
    const firstName = query['first_name']
    const result = greetings(firstName.toString())

    res.status(200).json(result)
  } else {
    res.status(400).end('Bad request, missing parameter')
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
