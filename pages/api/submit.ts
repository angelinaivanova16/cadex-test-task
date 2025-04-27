import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body;
    console.log('Received data:', req.body);
    res.status(200).json({ message: `Спасибо за ваш интерес, ${name}!` });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}