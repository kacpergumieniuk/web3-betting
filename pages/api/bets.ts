import type { NextApiRequest, NextApiResponse } from 'next'


 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({results: [{ team1: 'Polska', team2: 'Afryka', id: 1, odds1: 2.40, odds2: 1.80, draw: 3 }, {team1: 'Poljaki', team2: 'Nigeria', id: 2, odds1: 5, odds2: 1.2, draw: 8}, {team1: 'Biłgoraj', team2: 'Zamch', id: 3, odds1: 9, odds2: 1.1, draw: 11}]})
}
