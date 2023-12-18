'use client'

import { useState } from 'react'
import CSButton from '../button/CSButton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const DownLoadButton = () => {
  const { data: sessoin } = useSession()
  const router = useRouter()

  const downloadFile = async (): Promise<void> => {
    if (sessoin?.user) {
      return router.push('/contents/dsp/webgl')
    }
    alert('로그인을 해주세요')
    return router.push('/auth/login')
  }

  return (
    <CSButton
      onClick={downloadFile}
      width="230"
      height="45"
      rounded="30"
      color="fff"
      className="text-21 font-bold text-[#383838]"
    >
      DSP 실행하기
    </CSButton>
  )
}
export default DownLoadButton
