import React from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import {Cinzel_Decorative} from 'next/font/google'

// font
const font = Cinzel_Decorative({weight: '700', subsets: ['latin']})

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>Blogyy</div>
        </Link>
        <ThemeSwitch/>
      </div>
    </div>
  )
}

export default Navbar
