import { useEffect, useState } from 'react'
import { TicketTabInterface } from '../../common/types'

const TicketTab = ({ chosenBets, setChosenBets }: TicketTabInterface) => {
    const [totalCourse, setTotalCourse] = useState<number>(1)

    const [stakeValue, setStakeValue] = useState<number>(0)
    const [estimatedWin, setEstimatedWin] = useState<number>(0)

    useEffect(() => {
        stakeValue > 0 && setEstimatedWin(stakeValue * totalCourse)
    }, [stakeValue, chosenBets])

    useEffect(() => {
        setTotalCourse(1)
        chosenBets?.map((bet) => {
            totalCourse === 1
                ? setTotalCourse(bet.odds)
                : setTotalCourse((prev) => prev * bet.odds)
        })
    }, [chosenBets])

    const handleDeleteTab = (id: number) => {
        const newChosenBets = chosenBets?.filter((bet: any) => {
            return bet.id != id
        })
        setChosenBets!(newChosenBets)
        console.log(id)
    }
    return (
        <div className="basis-1/4 bg-white mx-20 static mb-4 mt-8 rounded-lg h-screen">
            {chosenBets?.map((bet: any, key) => (
                <div
                    className="border rounded-md p-2 m-2"
                    onClick={() => handleDeleteTab(bet.id)}
                    key={key}
                >
                    <p className="text-xs font-bold text-gray-500">
                        {bet.team1} - {bet.team2}
                    </p>
                    <p className="text-sm font-bold">
                        Wynik meczu: {bet.winner}
                    </p>
                    <p>Kurs: {bet.odds}</p>
                </div>
            ))}
            {totalCourse > 1 && (
                <>
                    <div className="flex justify-between items-center px-3 flex-wrap mt-5 mb-2">
                        <p className="text-gray-500 font-bold text-sm">
                            Kurs{' '}
                            <span className="text-black text-md p-2 bg-secondary font-bold rounded-lg">
                                {totalCourse.toFixed(2)}
                            </span>
                        </p>
                        <input
                            type="text"
                            className="rounded-md py-2 border border-black w-2/5 font-bold px-2"
                            onChange={(e) =>
                                setStakeValue(parseInt(e.target.value))
                            }
                            value={stakeValue}
                        />
                    </div>
                    <div className="flex justify-between items-center px-3">
                        <p className="text-sm">Ewentualna wygrana:</p>
                        <p className="text-secondary font-bold">
                            {estimatedWin.toFixed(2)} zł
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}
export default TicketTab
