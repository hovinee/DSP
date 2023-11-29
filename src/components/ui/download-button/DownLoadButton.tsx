'use client'

import CSButton from '../button/CSButton'

const DownLoadButton = () => {
  const handleDownload = () => {
    const filePath = '/dsp.zip' // 파일 경로
    const publicUrl = 'https://dsp-seven.vercel.app' // NEXT_PUBLIC_BASE_URL은 .env 파일에 설정되어 있어야 합니다.
    const fileUrl = `${publicUrl}${filePath}`

    // 이미지 다운로드
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = 'dsp.zip'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <CSButton
      onClick={handleDownload}
      width="230"
      height="45"
      rounded="30"
      color="fff"
      className="text-21 font-bold text-[#383838]"
    >
      Download
    </CSButton>
  )
}
export default DownLoadButton
