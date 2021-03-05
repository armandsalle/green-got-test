import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(400)
    .end(`Bad request, please provide a name on '/api/greetings/YOUR_NAME'`)
}

export default handler
