import { useRef, useEffect } from 'react'
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'
import 'video.js/dist/video-js.css'

interface VideoProps {
  videoTarget: HTMLElement | null
  options?: VideoJsPlayerOptions
  plugins?: string[]
}

const DEFAULT_OPTIONS: VideoJsPlayerOptions = {}

/**
 * video js 사용을 위한 커스텀 훅
 * @param  [options]
 *         video js options
 * @param {Array} [plugins]
 *         string array for video js plugins,
 * @param {Node} [videoTarget]
 *                video js DOM Element
 * @returns {Object} { player: videojs player }
 */

const useVideo = ({ options, videoTarget, plugins = [] }: VideoProps) => {
  const playerRef = useRef<VideoJsPlayer | null>(null)

  const initializeVideo = () => {
    if (videoTarget === null) return

    const videoElement = document.createElement('video-js')
    videoElement.classList.add('vjs-fill')
    videoTarget.appendChild(videoElement)

    const player = (playerRef.current = videojs(
      videoElement,
      { ...DEFAULT_OPTIONS, ...options },
      () => {
        plugins.forEach((plugin) => {
          // eslint-disable-next-line no-prototype-builtins
          if (player.hasOwnProperty(plugin)) {
            ;(player as any)[plugin]()
          } else {
            videojs.log.warn(`${plugin} plugin not found`)
          }
        })
        // 이 부분에서 timeupdate 이벤트 리스너 등록
        player.on('timeupdate', handleTimeUpdate)
        player.ready(function () {
          const totalDuration = player.duration()

          console.log('Total Duration:', totalDuration)
          player.currentTime(50)
        })
        player.on('loadedmetadata', handletotalDuration)
      },
    ))
  }
  // loadedmetadata 이벤트 핸들러
  const handletotalDuration = () => {
    // Get the total duration of the video
    if (playerRef.current) {
      const totalDuration = playerRef.current?.duration()
      console.log(totalDuration, 'total')
      const minutes = Math.floor(totalDuration / 60)
      const seconds = totalDuration % 60
      console.log('Total Duration:', `${minutes}분, ${seconds}초`)
    }
  }

  // timeupdate 이벤트 핸들러
  const handleTimeUpdate = () => {
    // 비디오의 현재 재생 시간을 가져옵니다.
    const currentTime = playerRef.current?.currentTime()

    // currentTime을 이용해 원하는 작업을 수행합니다.
    console.log('현재 재생 시간:', currentTime)
  }

  const playerCleanUp = (cb?: () => void) => {
    const player = playerRef.current
    if (player && !player.isDisposed()) {
      player.dispose()
      playerRef.current = null
      if (cb) cb()
    }
  }

  const playerReset = () => {
    playerCleanUp()
    initializeVideo()
  }

  useEffect(() => {
    // 초기 video.js initialize
    if (!playerRef.current) {
      initializeVideo()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, videoTarget])

  useEffect(() => {
    // player clean up
    return () => {
      playerCleanUp()
    }
  }, [playerRef])

  return {
    player: playerRef.current,
    playerReset,
  }
}

export default useVideo
