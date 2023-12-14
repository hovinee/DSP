import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import { Main } from '@utils/types'

type ContentsProps = Omit<Main, 'contents'>

interface Props {
  data: ContentsProps['banner']
}

const Banner = ({ data }: Props) => {
  return (
    <div className="relative h-[50rem] xl:h-[100%]">
      <AutoSizeImage src={data.banner_image} full priority />

      <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-t from-black px-[9rem]">
        <AutoSizeImage
          src={data.dsp_image}
          className="h-[4.5rem] w-[20rem] xl:h-[7.2rem] xl:w-[30rem]"
        />
        <CSText
          size="21 xl:31"
          color="white"
          className="mt-[2rem] xl:mt-[1.1rem]"
        >
          {data.intro1}
        </CSText>
        <CSText size="37 xl:54" weight="bold" color="white">
          {data.intro2}
        </CSText>
        <div className="flex gap-[10rem]">
          <CSText
            size="15 xl:23"
            color="white"
            className="mt-[1.5rem] whitespace-pre-line xl:mt-[2.3rem]"
          >
            {data.intro3}
          </CSText>
          <div className="flex flex-col">
            <CSText
              size="15 xl:23"
              color="white"
              className="mt-[1.5rem] whitespace-pre-line xl:mt-[2.3rem]"
            >
              - 로컬라이제이션 (한/영 변환)
            </CSText>
            <CSText
              size="15 xl:23"
              color="white"
              className="whitespace-pre-line"
            >
              - 웹뷰 (메타버스 안에서 발표자료 가져오기 및 메타버스 강의 등 활용
              가능)
            </CSText>
            <CSText
              size="15 xl:23"
              color="white"
              className="whitespace-pre-line "
            >
              - 3D 오브젝트 불러오기 (스페이셜IO 처럼 가져오는 공간에 필요한
              에셋들을 추가)
            </CSText>
            <CSText
              size="15 xl:23"
              color="white"
              className="whitespace-pre-line "
            >
              - 공간 커스텀 기능
            </CSText>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
