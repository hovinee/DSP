import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSButton from '@components/ui/button/CSButton'
import DownLoadButton from '@components/ui/download-button/DownLoadButton'
import BannerSection from '@components/ui/section/BannerSection'
import CSText from '@components/ui/text/CSText'
import { getIntroData } from '@lib/data'

const Intro = () => {
  const data = getIntroData()

  return (
    <>
      <BannerSection>
        <div className="relative h-full w-full">
          <AutoSizeImage src={data.banner.banner_image} full priority />
          <div className="absolute inset-0 flex flex-col justify-center px-[5rem] lg:mx-auto lg:w-[81.3rem] lg:pl-0 xl:w-[95.1rem]">
            <CSText size="60" color="white" weight="bold">
              {data.banner.title}
            </CSText>
            <div className="w- mt-[1rem]">
              <CSText size="18" color="white">
                {
                  'labkid-industry는 메타버스 플랫폼으로, 가상 및 증강 현실을  활용하여 공간적 협업을 가능하게 합니다. 주요 사업 모델은 구독 서비스 가입이며 기업 솔루션, 이벤트 호스팅 및 스폰서십, 콘텐츠 판매 및 마켓플레이스, 파트너십 및 협업을 포함 합니다. 이를 통해 다양한 수익원을 창출합니다. '
                }
              </CSText>
              <CSText size="18" color="white" className="mt-[1rem]">
                {data.banner.intro}
              </CSText>
              <CSButton
                width="148"
                height="45"
                rounded="30"
                color="fff"
                className="mt-[5.5rem] text-21 font-bold text-[#383838]"
              >
                문의하기
              </CSButton>
            </div>
          </div>
        </div>
      </BannerSection>
      <section className="mx-auto py-[5.5rem] lg:mx-[9rem]">
        <div className="flex w-[56rem] flex-col gap-[5.5rem] lg:h-full lg:w-full ">
          {data.contents.map(({ title, description, intro_image }, index) => (
            <div
              key={index}
              className="lg:mx-auto lg:flex lg:h-[full] lg:gap-[5.8rem]"
            >
              <div
                className={`${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                } lg:w-[39rem] xl:w-[47rem]`}
              >
                <CSText size="35" color="white">
                  {title}
                </CSText>
                <CSText size="15" color="white" className="mt-[2.1rem]">
                  {description}
                </CSText>
              </div>
              <AutoSizeImage
                src={intro_image}
                className={`mt-[2.1rem] h-[28.8rem] w-full ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                } lg:top-0 lg:h-[18.5rem] lg:w-[36.5rem] xl:h-[21.5rem] xl:w-[42.3rem]`}
              />
            </div>
          ))}

          <div className="relative hidden w-full lg:block">
            <AutoSizeImage
              src={data.end.end_image}
              className="h-[21.1rem] w-full xl:h-[24.7rem]"
              rounded="10"
            />
            <div className="absolute inset-0 mt-[3rem] flex flex-col pl-[5.8rem]">
              <CSText size="35" color="white" weight="bold">
                {data.end.title}
              </CSText>

              <CSText size="18" color="white" className="whitespace-pre-line">
                {data.end.description}
              </CSText>
              <CSButton
                width="148"
                height="45"
                rounded="30"
                color="fff"
                className="mt-[2.5rem] text-21 font-bold text-[#383838]"
              >
                문의하기
              </CSButton>
            </div>
          </div>
          <div className="lg:mx-auto lg:w-[81.3rem] xl:w-[95.1rem]">
            <CSText size="35" color="white">
              자주묻는 질문
            </CSText>
            <div className="mt-[1.5rem] flex flex-col gap-[1rem]">
              {data.question.map((question, index) => (
                <CSText size="15" color="white" key={index}>
                  · {question}
                </CSText>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
