'use client'

import { useState } from 'react'
import CSButton from '../button/CSButton'
import Spinner from '@components/spinner/Spinner'

const DownLoadButton = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const url = 'https://dsp.team3.workers.dev/dsp.zip'

  const downloadFile = async () => {
    setLoading(true)
    await fetch(url, { method: 'GET' })
      .then((res) => {
        return res.blob()
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'dsp'
        document.body.appendChild(a)
        a.click()
        a.remove()
        setLoading(false)
      })
      .catch((err) => {
        console.error('err: ', err)
      })
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
        Download
      </CSButton>
      {loading && <Spinner />}
    </>
  )
}
export default DownLoadButton
