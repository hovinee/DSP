'use client'

import { useRouter } from 'next/navigation'
import Model from '@components/threejs-model/Model'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CSText from '@components/ui/text/CSText'
import { Main } from '@utils/types'

type ContentsProps = Omit<Main, 'banner'>

interface Props {
  data: ContentsProps['contents']
}

const Contents = ({ data }: Props) => {
  const router = useRouter()
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null)

  const hoverMouse = (enabled: boolean, index: number) => {
    setIsHover(enabled)
    setIsHoverIndex(index)
  }
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window === 'object' ? window.innerWidth : 0,
  )

  // 창 크기 변경 시 실행되는 함수
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  // 컴포넌트가 처음 렌더링될 때 이벤트 리스너 추가
  useEffect(() => {
    if (typeof window === 'object') {
      window.addEventListener('resize', handleResize)

      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const divRef = useRef<HTMLDivElement>(null)
  const [imageHeight, setImageHeight] = useState<number | null>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (divRef.current) {
        const divHeight = divRef.current.offsetHeight
        console.log('Div Height:', divHeight)

        // 여기에서 필요한 로직을 수행하고, 변경된 height 값을 사용할 수 있습니다.
        // 예를 들어, state를 업데이트하거나 다른 동작을 수행할 수 있습니다.
        setImageHeight(divHeight)
      }
    }

    // 처음 렌더링 시 높이 업데이트
    updateHeight()

    // value.width가 변경될 때마다 높이 업데이트
    window.addEventListener('resize', updateHeight)

    return () => {
      // cleanup 함수에서 이벤트 리스너 제거
      window.removeEventListener('resize', updateHeight)
    }
  }, [])
  return (
    <div className="grid w-full grid-cols-2 gap-x-[1rem] gap-y-[3rem] px-[4rem] pb-[9rem] md:grid-cols-3 xl:mt-[-15rem] xl:grid-cols-4 xl:gap-y-[5rem] xl:px-[9rem]">
      {data.map((value, index) => {
        return (
          <motion.div
            className="relative cursor-pointer"
            key={index}
            onClick={() =>
              value.title === 'DSP' && router.push('/contents/dsp')
            }
            animate={isHover && isHoverIndex === index ? 'hover' : 'rest'}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1 },
            }}
            onHoverStart={() => {
              hoverMouse(true, index)
            }}
            onHoverEnd={() => {
              hoverMouse(false, index)
            }}
            transition={{
              layout: { duration: 2, type: 'spring', bounce: 0.2 },
            }}
          >
            <motion.div
              className="absolute z-10 h-full w-full "
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              {value.type === '3d' && isHoverIndex === index && (
                <Model isHover={isHover} imageHeight={imageHeight} />
              )}

              {value.type === '2d' && isHoverIndex === index && (
                <div className="grid h-full w-full place-items-center rounded-[1.8rem] bg-black/70">
                  <CSText size="18" weight="bold" color="white">
                    서비스 준비중 입니다
                  </CSText>
                </div>
              )}
            </motion.div>

            <motion.div
              ref={divRef}
              variants={{
                rest: { opacity: 1 },
                hover: { opacity: value.type === '3d' ? 0 : 1 },
              }}
            >
              <AutoSizeImage src={value.thumbnail} roundedTop={1.8} full />
            </motion.div>
            <div className="flex w-full gap-[1.1rem] rounded-b-[1.8rem] bg-white px-[2.1rem] py-[0.9rem] xl:px-[3rem] xl:py-[1.3rem]">
              <div className="w-[4rem] xl:w-[5.6rem]">
                <AutoSizeImage
                  src={value.dsp_icon}
                  className="h-[4rem] w-[4rem] xl:h-[5.6rem] xl:w-[5.6rem]"
                  rounded="50%"
                />
              </div>
              <div>
                <CSText size="12 xl:18" weight="bold" color="black">
                  {value.title}
                </CSText>
                <CSText
                  size="12 xl:18"
                  color="black"
                  className="line-clamp-1 overflow-ellipsis"
                >
                  {value.description}
                </CSText>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Contents
