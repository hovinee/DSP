'use client'

const DownLoadButton = () => {
  const handleDownload = () => {
    const filePath = '/dsp.zip' // 파일 경로
    const publicUrl = process.env.NEXT_PUBLIC_BASE_URL // NEXT_PUBLIC_BASE_URL은 .env 파일에 설정되어 있어야 합니다.
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
    <button
      onClick={handleDownload}
      className="h-[4.5rem] w-[23rem] rounded-[3rem] bg-white text-21 font-bold text-[#383838]"
    >
      Download
    </button>
  )
}
export default DownLoadButton
