'use client'

import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import { useSticky } from '@hooks'
import Link from 'next/link'

const Header = () => {
  const { sticky, measuredRef } = useSticky()

  return (
    <header
      className={`${!sticky && 'absolute bg-transparent'} ${
        sticky && 'fixed bg-black shadow-2xl shadow-black'
      } inset-0 bottom-auto z-10 flex h-[8.4rem] w-full flex-col justify-center pl-[9rem] text-fuchsia-700`}
      ref={measuredRef}
    >
      <Link href={'/'}>
        <AutoSizeImage
          src={'/images/logo.png'}
          className="h-[2.67rem] w-[12rem]"
        />
      </Link>
    </header>
  )
}
export default Header
