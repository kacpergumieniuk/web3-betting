import type { NextApiRequest, NextApiResponse } from 'next'



 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
  res.status(200).json({results: [{ team1: 'Polska', team2: 'Rosja', id: 1, odds1: 2.40, odds2: 1.80, draw: 3 }, {team1: 'Finlandia', team2: 'Czechy', id: 2, odds1: 5, odds2: 1.2, draw: 8}, {team1: 'Kraków', team2: 'Warszawa', id: 3, odds1: 9, odds2: 1.1, draw: 11}]})
}
