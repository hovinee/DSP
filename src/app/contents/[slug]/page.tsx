import SwiperSlider from '@components/swiper/SwiperSlider'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSButton from '@components/ui/button/CSButton'
import DownLoadButton from '@components/ui/download-button/DownLoadButton'
import BannerSection from '@components/ui/section/BannerSection'
import CSText from '@components/ui/text/CSText'
import Video from '@components/video/Video'
import { getContentsData } from '@lib/data'
import { getVideoData } from '@lib/video_data'
import Link from 'next/link'

const args = {
  styles: {
    width: '100%',
    aspectRatio: '16 / 9',
  },
  videoOptions: {
    controls: true,
    autoplay: false,
  },
}

const Contents = async ({ params }: any) => {
  const data = getContentsData(params.slug)

  const videoData1 = await getVideoData('895677331')
  const videoData2 = await getVideoData('894337178')
  const videoData3 = await getVideoData('894337154')
  const videoData4 = await getVideoData('894337122')
  const videoData5 = await getVideoData('894337218')

  const videoSource1 = {
    src: videoData1?.play?.hls?.link,
    type: 'application/x-mpegURL',
  }
  const videoSource2 = {
    src: videoData2?.play?.hls?.link,
    type: 'application/x-mpegURL',
  }
  const videoSource3 = {
    src: videoData3?.play?.hls?.link,
    type: 'application/x-mpegURL',
  }
  const videoSource4 = {
    src: videoData4?.play?.hls?.link,
    type: 'application/x-mpegURL',
  }
  const videoSource5 = {
    src: videoData5?.play?.hls?.link,
    type: 'application/x-mpegURL',
  }

  return (
    <>
      <BannerSection>
        <AutoSizeImage src={data.banner.banner_image} full priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AutoSizeImage
            src={data.banner.dsp_image}
            className="h-[10rem] w-[18rem] xl:h-[14rem] xl:w-[25.4rem]"
          />
          <CSText size="18" color="white" weight="bold" className="mt-[1.5rem]">
            {data.banner.intro1}
          </CSText>
        </div>
      </BannerSection>

      <div className="mx-auto flex justify-between gap-[3rem] py-[5.4rem] md:gap-[6.2rem]">
        <section className="w-[32rem] lg:w-[52rem]">
          <CSText size="18" color="white" weight="bold">
            {data.banner.intro1}
          </CSText>
          <CSText size="35" color="white" weight="bold">
            DSP LAB
          </CSText>

          <div className="mt-[2.1rem] flex flex-col gap-12 whitespace-pre-line ">
            {data.contents.map((value, index) => (
              <div key={index}>
                <CSText size="16" color="white" weight="bold">
                  {value.title}
                </CSText>
                <CSText size="16" color="white">
                  {value.intro}
                </CSText>
              </div>
            ))}
            <CSText size="16" color="white">
              {data.end}
            </CSText>
          </div>
          {/* <div className="mt-[5.4rem] whitespace-pre-line">
            <div className="border-t border-t-white/20 py-[5.4rem]">
              <div className="flex gap-[1.8rem]">
                <div className="w-[4.5rem]">
                  <div className="h-[4.5rem] w-[4.5rem] rounded-full bg-[#D9D9D9]" />
                </div>
                <div>
                  <div>
                    <CSText size="18" color="white">
                      사용자1
                    </CSText>
                    <CSText size="15" color="white">
                      1일전
                    </CSText>
                  </div>

                  <div className="mt-[0.8rem] flex">
                    {[0, 0, 0, 0, 0].map((_, index) => (
                      <div key={index}>
                        <AutoSizeImage
                          src={'/images/star.png'}
                          className="h-[2.4rem] w-[2.4rem]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-[25rem] lg:w-[37.2rem]">
                    <CSText size="15" color="white" className="mt-[2.2rem]">
                      {
                        '이 프로그램은 정말 흥미롭네요.\n 공정이 움직이는것을 직접 볼수 있고 소재들도 가까이서 볼 수 있어서 좋아요'
                      }
                    </CSText>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-t-white/20 py-[5.4rem]">
              <div className="flex gap-[1.8rem]">
                <div className="w-[4.5rem]">
                  <div className="h-[4.5rem] w-[4.5rem] rounded-full bg-[#D9D9D9]" />
                </div>
                <div>
                  <div>
                    <CSText size="18" color="white">
                      사용자2
                    </CSText>
                    <CSText size="15" color="white">
                      3일전
                    </CSText>
                  </div>

                  <div className="mt-[0.8rem] flex">
                    {[0, 0, 0, 0, 0].map((_, index) => (
                      <div key={index}>
                        <AutoSizeImage
                          src={'/images/star.png'}
                          className="h-[2.4rem] w-[2.4rem]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-[25rem] lg:w-[37.2rem]">
                    <CSText size="15" color="white" className="mt-[2.2rem]">
                      {
                        '코일의 생산을 직접 체험하는거 같은 느낌이 드네요.\n메타버스 속 세상은 재밌네요. 궁금했던 부분들을 3d로 볼 수 있다는게 놀랍네요.'
                      }
                    </CSText>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <div>
          <aside className="h-[25rem] w-[27rem] rounded-[1rem] border border-white/20 ">
            <div className="h-[9.7rem] w-full border-b border-b-white/20 px-[2rem] pt-[2.5rem]">
              <DownLoadButton />
            </div>
            <div className="w-full px-[2rem] pt-[2.5rem]">
              <div className="flex flex-col gap-[1.4rem]">
                {data.aside.map((value, index) => (
                  <div className="flex gap-[0.7rem]" key={index}>
                    <AutoSizeImage
                      src={value.image_url}
                      className="h-[2.4rem] w-[2.4rem]"
                    />
                    <CSText size="18" color="white">
                      {value.title}
                    </CSText>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <Link href="https://docs.google.com/presentation/d/1GRq77GcCxpNDAb9ZsovzWmo0pSsnQg-eQzvpaUKmHVo/edit#slide=id.g2a3cee2999f_0_9">
            <CSButton
              width="230"
              height="45"
              rounded="10"
              color="fff"
              className="mx-auto mt-[2rem] text-21 font-bold text-[#383838]"
            >
              PPT DOCS
            </CSButton>
          </Link>
        </div>
      </div>
      <div className="px-[6rem]">
        <div className="mb-[1.5rem] text-21 text-white">
          10월 NCC 사내 공정불량율: 2.02%
        </div>
        <AutoSizeImage src={'/images/october.png'} full />
        <div className="my-[2rem] text-21 text-white">
          11월 NCC 사내 공정불량율: 1.50%
        </div>
        <div className="my-[1rem] text-21 text-green-600">
          {
            '▶ 품질 공정불량율(감소율): 사업 전(콘텐츠 활용 이전) 10월 2.02% > 사업 후(콘텐츠 활용 이후) 11월 1.50% 로 감소.'
          }
        </div>
        <AutoSizeImage src={'/images/november.png'} full />
      </div>
      <div className="px-[1rem]">
        <CSText
          size="21"
          color="white"
          weight="bold"
          className="mb-[4rem] mt-[3rem] pl-[4rem]"
        >
          DSP 비디오 갤러리
        </CSText>
        <div className="mb-[1rem] grid w-full grid-cols-3 gap-[1rem]">
          <div>
            <CSText
              size="18"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              소재 적용 전시관
            </CSText>
            <CSText
              size="15"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              사용자 인터페이스(UI)를 통해 각 제품의 물질적 특성(머티리얼)을
              변경해볼 수 있어, 제품의 다양한 측면을 직접 체험하고 이해할 수
              있습니다.
            </CSText>
            {videoSource1.src && <Video {...args} sources={videoSource1} />}
          </div>
          <div>
            <CSText
              size="18"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              브랜드 전시관
            </CSText>
            <CSText
              size="15"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              제품들을 회전시키거나 확대하여 자세히 살펴볼 수 있으며, 제품의
              기능과 디자인을 직접 체험할 수 있습니다.
            </CSText>
            {videoSource2.src && <Video {...args} sources={videoSource2} />}
          </div>
          <div>
            <CSText
              size="18"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              생산기술 전시관
            </CSText>
            <CSText
              size="15"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              가상의 팩토리 투어를 통해 제조 과정을 직접 볼 수 있습니다. 또한
              생산 기술의 세부 사항을 이해할 수 있습니다.
            </CSText>
            {videoSource3.src && <Video {...args} sources={videoSource3} />}
          </div>
          <div>
            <CSText
              size="18"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              광장
            </CSText>
            <CSText
              size="15"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              다목적 사회 공간. 대화 및 네트워킹의 장소이며 메타버스 내의
              중심적인 모임 장소로 기능합니다.
            </CSText>
            {videoSource4.src && <Video {...args} sources={videoSource4} />}
          </div>
          <div>
            <CSText
              size="18"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              회사 소개관
            </CSText>
            <CSText
              size="15"
              color="white"
              weight="bold"
              className="mb-[2rem] pl-[1rem]"
            >
              회사 정보를 관람 및 추출. 방문자에게 심층적 이해를 제공합니다.
            </CSText>
            {videoSource5.src && <Video {...args} sources={videoSource5} />}
          </div>
        </div>
      </div>
      <div className="px-[1rem]">
        <CSText
          size="21"
          color="white"
          weight="bold"
          className="mt-[1.5rem] pl-[4rem]"
        >
          DSP 기능 정의서
        </CSText>

        <SwiperSlider skill />
      </div>
      <div className="mb-[2rem] mt-[1rem] px-[1rem]">
        <CSText
          size="21"
          color="white"
          weight="bold"
          className="mt-[1.5rem] pl-[4rem]"
        >
          DSP 이미지 갤러리
        </CSText>
        <SwiperSlider />
      </div>
    </>
  )
}

export default Contents
