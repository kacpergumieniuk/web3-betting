import { PrismaClient, Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'


const prisma = new PrismaClient()


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
    try{
    const betData: Prisma.BetCreateInput = JSON.parse(req.body)
    const savedBet = await prisma.bet.create({
      data: betData
    })
    res.status(200).json(savedBet)
  }catch(err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}
