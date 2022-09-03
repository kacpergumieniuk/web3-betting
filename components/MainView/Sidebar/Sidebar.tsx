import React from 'react'
import { Sidebar } from '../../../common/types'

const Sidebar = ({ currentCategory, setCurrentCategory }: Sidebar) => {
    return (
        <div className="h-full w-2/12 border-r border-text-color fixed left-0 top-16 text-white">
            <div className="relative flex flex-col mt-6 mx-4">
                <input
                    type="text"
                    className=" p-2 bg-background-color border border-white mb-9"
                    placeholder="Sport"
                />
                <p
                    className="cursor-pointer"
                    onClick={() => setCurrentCategory('all')}
                >
                    All
                </p>
                <p
                    className="cursor-pointer"
                    onClick={() => setCurrentCategory('football')}
                >
                    Football
                </p>
                <p
                    className="cursor-pointer"
                    onClick={() => setCurrentCategory('basketball')}
                >
                    Basketball
                </p>
            </div>
        </div>
    )
}

export default Sidebar
