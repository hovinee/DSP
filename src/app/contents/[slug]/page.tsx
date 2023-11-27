import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import DownLoadButton from '@components/ui/download-button/DownLoadButton'
import CSText from '@components/ui/text/CSText'
import { getContentsData } from '@lib/data'

const Contents = ({ params }: any) => {
  const data = getContentsData(params.slug)

  return (
    <>
      <div className="xl:px-none relative h-[58.4rem] px-[5rem] xl:h-[100%]">
        <AutoSizeImage src={data.banner.banner_image} full priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[9rem]">
          <AutoSizeImage
            src={data.banner.dsp_image}
            className="h-[10rem] w-[18rem] xl:h-[14rem] xl:w-[25.4rem]"
          />
          <CSText size="18" color="white" weight="bold" className="mt-[1.5rem]">
            {data.banner.intro1}
          </CSText>
        </div>
      </div>
      <div className="mx-auto flex justify-between gap-[3rem] py-[5.4rem] md:gap-[6.2rem]">
        <section className="w-[32rem] md:w-[52rem]">
          <CSText size="18" color="white" weight="bold">
            {data.banner.intro1}
          </CSText>
          <CSText size="37" color="white" weight="bold">
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
          <div className="mt-[5.4rem] whitespace-pre-line">
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
                  <CSText size="15" color="white" className="mt-[2.2rem]">
                    {
                      '이 프로그램은 정말 흥미롭네요.\n공정이 움직이는것을 직접 볼수 있고 소재들도 가까이서 볼 수\n있어서 좋아요'
                    }
                  </CSText>
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
                  <CSText size="15" color="white" className="mt-[2.2rem]">
                    {
                      '코일의 생산을 직접 체험하는거 같은 느낌이 드네요.\n메타버스 속 세상은 재밌네요. 궁금했던 부분들을 3d로 볼 수\n있다는게 놀랍네요.'
                    }
                  </CSText>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      </div>
    </>
  )
}

export default Contents
