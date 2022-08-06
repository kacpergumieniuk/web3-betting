import { useEffect, useState } from 'react'

interface TicketTabInterface {
    chosenBets?: Array<any>
}

const TicketTab = ({ chosenBets }: TicketTabInterface) => {
    const [totalCourse, setTotalCourse] = useState<number>(1)
    useEffect(() => {
        setTotalCourse(1)
        chosenBets?.map((bet) => {
            totalCourse === 1
                ? setTotalCourse(bet.odds)
                : setTotalCourse((prev) => prev * bet.odds)
        })
    }, [chosenBets])
    return (
        <div className="basis-1/4 bg-white mx-20 static mb-4 mt-8 rounded-lg h-screen">
            {chosenBets?.map((bet: any) => (
                <div className="border rounded-md p-2 m-2">
                    <p className="text-xs font-bold text-gray-500">
                        {bet.team1} - {bet.team2}
                    </p>
                    <p className="text-sm font-bold">
                        Wynik meczu: {bet.winner}
                    </p>
                    <p>Kurs: {bet.odds}</p>
                </div>
            ))}
            {totalCourse > 1  && <p className='px-2 mt-4 text-gray-500 font-bold text-sm'>Kurs <span className='text-black text-md p-2 bg-secondary font-bold rounded-lg'>{totalCourse.toFixed(2)}</span></p>}
            
        </div>
    )
}
export default TicketTab
