'use client'

import Overlay from '@components/overlay/Overlay'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import { useState } from 'react'

const Nav = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <>
      <CSText
        size="18"
        color="white hover:D9D9D9"
        weight="semiBold"
        className="cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        · RAPA 인증
      </CSText>
      {openModal && (
        <Overlay>
          <div className="bg relative z-10 w-1/4">
            <div className="absolute right-0 top-[-4rem]">
              <AutoSizeImage
                src={'/images/cancel.png'}
                className="h-[3rem] w-[3rem] cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <AutoSizeImage src={'/images/RAPA.png'} full rounded="10" />
          </div>
        </Overlay>
      )}
    </>
  )
}

export default Nav
