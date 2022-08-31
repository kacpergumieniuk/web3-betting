import React from 'react'
import { Sidebar } from '../../../common/types'

const Sidebar = ({ currentCategory, setCurrentCategory }: Sidebar) => {
    return (
        <div className="h-full w-20 border-r border-text-color fixed left-0 top-0 text-white">
            <p onClick={() => setCurrentCategory('all')}>All</p>
            <p onClick={() => setCurrentCategory('football')}>Football</p>
            <p onClick={() => setCurrentCategory('basketball')}>Basketball</p>
        </div>
    )
}

export default Sidebar
