import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import { getFooterData } from '@lib/data'

const Footer = () => {
  const data = getFooterData()

  return (
    <footer className="w-full border-t px-[9rem] py-[5.2rem] text-white">
      <CSText size="12 xl:14" color="white" className="whitespace-pre-line">
        {`서울특별시 마포구 성암로 330, 5층 517호 (상암동, 디엠씨첨단산업센터)\n경기도 수원시 영통구 광교로 156, 7층 710호 (광교비즈니스센터)`}
      </CSText>
      <CSText
        size="12 xl:14"
        color="white"
        className="mt-[1.7rem] whitespace-pre-line"
      >
        {`Tel: 02-305-5002\nEmail: ceo@ducowise.com / david@ducowise.com`}
      </CSText>
      <div className="flex w-full flex-col items-end">
        <CSText size="12 xl:14" color="white">
          {`© 저작권보호 2019 주식회사 듀코젠사업자등록번호: 655-87-00359`}
        </CSText>
        <div className="mt-[0.5rem] flex gap-1">
          <div className="flex h-[2.67rem] w-[5rem] items-center">
            <AutoSizeImage src={data.meta} className="h-[1.1rem] w-[5rem]" />
          </div>
          <AutoSizeImage
            src={'/images/footer/apple.png'}
            className="h-[2.67rem] w-[7.5rem]"
          />
          <AutoSizeImage src={data.google} className="h-[2.67rem] w-[9rem]" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
