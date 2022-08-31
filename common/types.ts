import { Bet } from "@prisma/client"

export interface ChosenBetsInterface {
    team1: string
    team2: string
    odds: number
    id: string
    winner: string
}

export interface NavbarInterface {
    setCurrentTab: (value: string) => void
    currentTab: string
    userBalance: number
}

export interface TicketTabInterface {
    chosenBets?: Array<ChosenBetsInterface>
    setChosenBets?: (value: any) => void
    userBalance: number
}

export type BetTabInterface = Bet & {
    setChosenBets: (value: any) => void
    chosenBets: Array<ChosenBetsInterface>
}

export type Sidebar = {
    setCurrentCategory: (value: string) => void
    currentCategory: string
}

export type MainView = {
    filteredBets: Bet[]
    bets: Bet[]
    currentCategory: string
}