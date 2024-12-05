'use client'
import {useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from './Icons'

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }
  return (
    <button
    className="rounded-full p-2 hover:bg-yellow-950 dark:hover:bg-yellow-1000"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
        {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
    </button>
  )
}

export default ThemeSwitch