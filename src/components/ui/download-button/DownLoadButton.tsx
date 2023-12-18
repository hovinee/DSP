'use client'

import { useState } from 'react'
import CSButton from '../button/CSButton'
import axios from 'axios'
import Progressbar from '@components/Progress-bar/ProgressBar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const DownLoadButton = () => {
  const { data: sessoin } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [number, setNumber] = useState<number>(0)
  const url = 'https://dsp.team3.workers.dev/dsp.zip'

  function throttle(callback: () => void, delay: number) {
    let lastExecTime = 0

    return function () {
      const now = Date.now()

      if (now - lastExecTime >= delay) {
        callback()
        lastExecTime = now
      }
    }
  }

  const downloadFile = async (): Promise<void> => {
    // setLoading(true)
    // try {
    //   await axios
    //     .get(url, {
    //       responseType: 'blob',
    //       onDownloadProgress: (progressEvent) => {
    //         // 프로그레스 이벤트 처리
    //         const progress = (progressEvent.loaded / progressEvent.total!) * 100
    //         const throttleUpdate = throttle(() => {
    //           // UI 업데이트 등 원하는 작업 수행
    //           setNumber(progress)
    //         }, 500) // 500ms 간격으로 업데이트
    //         throttleUpdate()
    //       },
    //     })
    //     .then((res) => {
    //       // 데이터와 MIME 타입을 사용하여 Blob 생성
    //       const blob = new Blob([res.data], {
    //         type: res.headers['content-type'],
    //       })

    //       // Blob을 사용하여 다운로드 링크 생성
    //       const url = window.URL.createObjectURL(blob)
    //       const a = document.createElement('a')
    //       a.href = url
    //       a.download = 'dsp' // 다운로드될 파일 이름 지정
    //       document.body.appendChild(a)
    //       a.click()
    //       a.remove()
    //       setLoading(false)
    //       setNumber(0)
    //     })
    // } catch (error) {
    //   console.error('Error:', error)
    // }
    if (sessoin?.user) {
      return router.push('/contents/dsp/webgl')
    }
    alert('로그인을 해주세요')
    return router.push('/auth/login')
  }

  return (
    <>
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

      {loading && <Progressbar number={number} />}
    </>
  )
}
export default DownLoadButton
