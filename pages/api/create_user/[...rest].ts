import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(400).end(`Bad request, this route does not take an UID.`)
}

export default handler
