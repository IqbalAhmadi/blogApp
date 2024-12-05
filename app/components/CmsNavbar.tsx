import Link from 'next/link'
import { Cinzel_Decorative } from 'next/font/google'
import { BackArrowIcon } from './Icons'

// font
const font = Cinzel_Decorative({ weight: '700', subsets: ['latin'] })

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>

      <div className={`${font.className} text-3xl dark:text-amber-50`}>
        Blogyy
      </div>
    </div>
  )
}

export default CmsNavbar
