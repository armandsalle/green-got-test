import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(404).json({ status: 404, error: `Route not found` })
}

export default handler
