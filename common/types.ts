export interface ChosenBetsInterface {
    team1: string
    team2: string
    odds: number
    id: number
    winner: string
}

export interface BetsInterface {
    team1: string
    team2: string
    odds1: number
    odds2: number
    draw: number
    id: number 
}

export interface TicketTabInterface {
    chosenBets?: Array<ChosenBetsInterface>
    setChosenBets?: (value: any) => void
}

export interface BetTabInterface {
    team1: string
    team2: string
    odds1: number
    odds2: number
    draw: number
    id: number
    setChosenBets: (value: any) => void
    chosenBets: Array<ChosenBetsInterface>
}