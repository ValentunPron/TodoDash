'use client'

import { useTheme } from 'next-themes'
import React from 'react'

function ThemeSwitcher() {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true)
      }, [])
    
    if(!mounted) return null

    return (
        <div>
            The current theme is: {theme}
            <br />
            <div className='flex gap-2'>
                <button className='mainButton' onClick={() => setTheme('purple')}>Purple Mode</button>
                <button className='mainButton' onClick={() => setTheme('dark')}>Dark Mode</button>
                <button className='mainButton' onClick={() => setTheme('light')}>Light Mode</button>
            </div>
        </div>
    )
}

export default ThemeSwitcher