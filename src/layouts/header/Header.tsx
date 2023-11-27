'use client'

import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import { useSticky } from '@hooks'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Header = () => {
  const { sticky, measuredRef } = useSticky()
  const param = useParams()

  return (
    <>
      {param.slug ? (
        <header
          className="fixed inset-0 bottom-auto z-10 flex h-[8.4rem] w-full flex-col justify-center bg-black pl-[9rem] shadow-2xl shadow-black/50"
          ref={measuredRef}
        >
          <Link href={'/'}>
            <AutoSizeImage
              src={'/images/logo.png'}
              className="h-[2.67rem] w-[12rem]"
            />
          </Link>
        </header>
      ) : (
        <header
          className={`${!sticky && 'absolute bg-transparent'} ${
            sticky && 'fixed bg-black shadow-2xl shadow-black'
          } inset-0 bottom-auto z-10 flex h-[8.4rem] w-full flex-col justify-center pl-[9rem] `}
          ref={measuredRef}
        >
          <Link href={'/'}>
            <AutoSizeImage
              src={'/images/logo.png'}
              className="h-[2.67rem] w-[12rem]"
            />
          </Link>
        </header>
      )}
    </>
  )
}
export default Header
