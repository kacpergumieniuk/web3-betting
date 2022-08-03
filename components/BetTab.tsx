import React from 'react'

interface BetTabInterface {
    team1: string
    team2: string
    odds1: number
    odds2: number
    draw: number
    id: number
}
const BetTab = ({ team1, team2, odds1, odds2, draw, id }: BetTabInterface) => {
    return (
        <div className="flex px-4 my-3 py-6 bg-white w-1/2 rounded-lg justify-between items-center">
            <p className="font-bold">
                {team1} - {team2}
            </p>
            <div className="flex">
                <div className="bg-secondary mx-2 text-center px-4 py-1 rounded-lg cursor-pointer hover:bg-secondary-hover transition flex flex-col justify-between">
                    <p className="text-sm">{team1}</p>
                    <p className=" font-bold">{odds1}</p>
                </div>
                <div className="bg-secondary mx-2 text-center px-4 py-1 rounded-lg cursor-pointer hover:bg-secondary-hover transition flex flex-col justify-between">
                    <p className="text-sm">Remis</p>
                    <p className=" font-bold">{draw}</p>
                </div>
                <div className="bg-secondary mx-2 text-center px-4 py-1 rounded-lg cursor-pointer hover:bg-secondary-hover transition flex flex-col justify-between">
                    <p className="text-sm">{team2}</p>
                    <p className=" font-bold">{odds2}</p>
                </div>
            </div>
        </div>
    )
}

export default BetTab
