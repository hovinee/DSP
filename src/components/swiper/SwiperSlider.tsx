'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required moduless
// import './style.css'
import AutoSizeImage from '../ui/auto-size-image/AutoSizeImage'
import { useState } from 'react'
import Overlay from '@components/overlay/Overlay'

interface TProps {
  skill?: boolean
}

const SwiperSlider = ({ skill }: TProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [imagekey, setImagekey] = useState<number>(0)
  SwiperCore.use([Navigation, Scrollbar])
  const imageData = [
    '/images/still/still1_1.png',
    '/images/still/still1_2.png',
    '/images/still/still1_3.png',
    '/images/still/still2_1.png',
    '/images/still/still2_2.png',
    '/images/still/still2_3.png',
    '/images/still/still3_1.png',
    '/images/still/still3_2.png',
    '/images/still/still3_3.png',
    '/images/still/still3_4.png',
    '/images/still/still4_1.png',
    '/images/still/still4_2.png',
    '/images/still/still4_3.png',
    '/images/still/still4_4.png',
    '/images/still/still5_1.png',
    '/images/still/still5_2.png',
    '/images/still/still5_3.png',
  ]
  const skillData = [
    '/images/fucntion/1.png',
    '/images/fucntion/2.png',
    '/images/fucntion/3.png',
    '/images/fucntion/4.png',
    '/images/fucntion/5.png',
    '/images/fucntion/6.png',
    '/images/fucntion/7.png',
    '/images/fucntion/8.png',
    '/images/fucntion/9.png',
    '/images/fucntion/10.png',
    '/images/fucntion/11.png',
    '/images/fucntion/12.png',
    '/images/fucntion/13.png',
    '/images/fucntion/14.png',
    '/images/fucntion/15.png',
    '/images/fucntion/16.png',
    '/images/fucntion/17.png',
    '/images/fucntion/18.png',
    '/images/fucntion/19.png',
    '/images/fucntion/20.png',
    '/images/fucntion/21.png',
    '/images/fucntion/22.png',
    '/images/fucntion/23.png',
    '/images/fucntion/24.png',
    '/images/fucntion/25.png',
    '/images/fucntion/26.png',
    '/images/fucntion/27.png',
    '/images/fucntion/28.png',
    '/images/fucntion/29.png',
  ]
  return (
    <>
      {skill ? (
        <>
          <div className="mb-[2rem] flex justify-end pr-[3rem]">
            <div className="flex gap-[3rem]">
              <AutoSizeImage
                src={'/images/left_arrow.png'}
                className="arrow-left-skill h-[2rem] w-[2rem] cursor-pointer"
              />
              <AutoSizeImage
                src={'/images/right_arrow.png'}
                className="arrow-right-skill h-[2rem] w-[2rem] cursor-pointer"
              />
            </div>
          </div>
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1240: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={18}
            modules={[Navigation]}
            navigation={{
              nextEl: '.arrow-right-skill',
              prevEl: '.arrow-left-skill',
            }}
          >
            {skillData.map((image_url, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  setOpenModal(true), setImagekey(index)
                }}
              >
                <AutoSizeImage src={image_url} full rounded="10" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <div className="mb-[2rem] flex justify-end pr-[3rem]">
            <div className="flex gap-[3rem]">
              <AutoSizeImage
                src={'/images/left_arrow.png'}
                className="arrow-left h-[2rem] w-[2rem] cursor-pointer"
              />
              <AutoSizeImage
                src={'/images/right_arrow.png'}
                className="arrow-right h-[2rem] w-[2rem] cursor-pointer"
              />
            </div>
          </div>
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1240: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={18}
            modules={[Navigation]}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          >
            {imageData.map((image_url, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  setOpenModal(true), setImagekey(index)
                }}
              >
                <AutoSizeImage src={image_url} full rounded="10" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      {openModal && (
        <Overlay>
          <div className="bg relative z-10 w-2/3">
            <div className="absolute right-0 top-[-4rem]">
              <AutoSizeImage
                src={'/images/green-close.png'}
                className="h-[2rem] w-[2rem] cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <AutoSizeImage
              src={skill ? skillData[imagekey] : imageData[imagekey]}
              full
              rounded="10"
            />
          </div>
        </Overlay>
      )}
    </>
  )
}

export default SwiperSlider
