'use client'

import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import { useSticky } from '@hooks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Nav from './Nav'

const Header = () => {
  const { sticky, measuredRef } = useSticky()
  const path = usePathname()

  const header =
    path !== '/'
      ? 'fixed z-10 h-[8.4rem] bg-black pl-[9rem] shadow-2xl shadow-black/50'
      : `${!sticky && 'absolute bg-transparent'} ${
          sticky && 'fixed bg-black shadow-2xl shadow-black'
        } inset-0 bottom-auto z-10 h-[8.4rem] pl-[2rem] md:pl-[9rem]`

  return (
    <>
      <header
        className={`flex w-full items-center gap-[1rem] md:gap-[4.4rem] ${header}`}
        ref={measuredRef}
      >
        <Link href={'/'}>
          <AutoSizeImage
            src={'/images/logo.png'}
            className="h-[2.67rem] w-[12rem]"
          />
        </Link>
        <div className="flex gap-[1rem] md:gap-[3rem]">
          <Link href={'/intro'}>
            <CSText
              size="12 md:18"
              color="white hover:D9D9D9"
              weight="semiBold"
            >
              · LABKID Industry 란?
            </CSText>
          </Link>
          <Nav />
        </div>
      </header>
    </>
  )
}
export default Header
