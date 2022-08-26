import React from 'react'
import { useForm } from 'react-hook-form'

interface AddContactFormProps {
    onSubmit: any
}

const AdminPanel = ({ onSubmit }: AddContactFormProps) => {
    const { register, handleSubmit } = useForm()

    return (
        <div className="h-screen w-screen flex justify-center items-center text-white">
            <div className="w-1/3 h-2/3 bg-primary rounded-lg">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 text-black"
                >
                    <input {...register('team1', { required: true })} />
                    <input {...register('team2', { required: true })} />
                    <input
                        type="number"
                        {...register('odds1', {
                            required: true,
                            valueAsNumber: true,
                            minLength: 1,
                        })}
                    />
                    <input
                        type="number"
                        {...register('odds2', {
                            required: true,
                            valueAsNumber: true,
                            minLength: 1,
                        })}
                    />
                    <input
                        type="number"
                        {...register('draw', {
                            required: true,
                            valueAsNumber: true,
                            minLength: 1,
                        })}
                    />
                    <input {...register('category', { required: true })} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AdminPanel
