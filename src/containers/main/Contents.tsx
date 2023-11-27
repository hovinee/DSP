'use client'

import { useRouter } from 'next/navigation'
import Model from '@components/threejs-model/Model'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import { useState } from 'react'
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

  return (
    <div className="grid w-full grid-cols-2 gap-y-[0.9rem] px-[4rem] pb-[9rem] md:grid-cols-3 xl:grid-cols-4 xl:gap-y-[5rem] xl:px-[9rem]">
      {data.map((value, index) => {
        return (
          <motion.div
            className="relative m-auto cursor-pointer"
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
              className="absolute z-10"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              {value.type === '3d' && isHoverIndex === index && (
                <Model isHover={isHover} />
              )}
              {value.type === '2d' && isHoverIndex === index && (
                <div className="grid h-[22.7rem] w-[30rem] place-items-center rounded-[1.8rem] bg-black/70 xl:h-[32rem] xl:w-[42.3rem]">
                  <CSText size="18" weight="bold" color="white">
                    서비스 준비중 입니다
                  </CSText>
                </div>
              )}
            </motion.div>
            <motion.div
              variants={{
                rest: { opacity: 1 },
                hover: { opacity: value.type === '3d' ? 0 : 1 },
              }}
              className="h-[17rem] w-[30rem] xl:h-[24rem] xl:w-[42.3rem]"
            >
              <AutoSizeImage
                src={value.thumbnail}
                roundedTop={1.8}
                className="h-full w-full"
              />
            </motion.div>
            <div className="flex h-[5.7rem] w-[30rem] gap-[1.1rem] rounded-b-[1.8rem] bg-white px-[2.1rem] pt-[0.9rem] xl:h-[8rem] xl:w-[42.3rem] xl:px-[3rem] xl:pt-[1.3rem]">
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
