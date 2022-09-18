import React from 'react'
import { useForm } from 'react-hook-form'
import { useAddMatch } from '../../hooks/useAddMatch'
import PacmanLoader from 'react-spinners/BounceLoader'
interface AddContactFormProps {
    onSubmit: any
}

const AdminPanel = ({ onSubmit }: AddContactFormProps) => {
    const { register, handleSubmit } = useForm()
    const { sendAddMatchTransaction, addMatchStatus } = useAddMatch()

    const addMatch = (data: any) => {
        const odds1 = data.odds1 * 100
        const odds2 = data.odds2 * 100
        const draw = data.draw * 100
        sendAddMatchTransaction(
            data.team1,
            data.team2,
            odds1,
            odds2,
            draw,
            '1663582795'
        )
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center text-white">
            <div className="w-1/3 bg-primary p-4 text-center">
                <p className="mb-4">Add Match</p>
                <form
                    onSubmit={handleSubmit(addMatch)}
                    className="flex flex-col gap-4 text-black items-center"
                >
                    <input
                        {...register('team1', { required: true })}
                        placeholder="Team 1"
                        className="w-full"
                    />
                    <input
                        placeholder="Team 2"
                        {...register('team2', { required: true })}
                        className="w-full"
                    />
                    <input
                        placeholder="Odds 1"
                        type="number"
                        {...register('odds1', {
                            required: true,
                            valueAsNumber: true,
                            minLength: 1,
                        })}
                        className="w-full"
                    />
                    <input
                        type="number"
                        placeholder="Odds 2"
                        {...register('odds2', {
                            required: true,
                            valueAsNumber: true,
                            minLength: 1,
                        })}
                        className="w-full"
                    />
                    <input
                        placeholder="Draw odds"
                        type="number"
                        {...register('draw', {
                            required: true,
                            valueAsNumber: true,
                            minLength: 1,
                        })}
                        className="w-full"
                    />
                    {/* <input
                        placeholder="Category"
                        {...register('category', { required: true })}
                        className="w-full"
                    /> */}
                    <button
                        type="submit"
                        className="bg-white flex w-20 h-12 justify-center items-center"
                    >
                        {addMatchStatus === 'Mining' ||
                        addMatchStatus === 'PendingSignature' ? (
                            <PacmanLoader color={'#16171F'} size={40} />
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminPanel
