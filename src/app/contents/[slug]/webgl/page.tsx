'use client'

import { Unity, useUnityContext } from 'react-unity-webgl'
import React, { useState, useEffect, useCallback } from 'react'
import { cfWorkerUrl } from '@utils/url'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import Progressbar from '@components/Progress-bar/ProgressBar'

const Anneagram = () => {
  const [load, setLoad] = useState<boolean>(false)
  const handleGameOver = useCallback((data: any) => {
    console.log('??')
    setLoad(true)
  }, [])

  const {
    unityProvider,
    addEventListener,
    removeEventListener,
    loadingProgression,
    isLoaded,
    sendMessage,
  } = useUnityContext({
    loaderUrl: `${cfWorkerUrl}/Build/Build_Web.loader.js`,
    dataUrl: `${cfWorkerUrl}/Build/Build_Web.data`,
    frameworkUrl: `${cfWorkerUrl}/Build/Build_Web.framework.js`,
    codeUrl: `${cfWorkerUrl}/Build/Build_Web.wasm`,
  })

  useEffect(() => {
    addEventListener('OnSplashEnd', handleGameOver)
    return () => {
      removeEventListener('OnSplashEnd', handleGameOver)
    }
  }, [addEventListener, removeEventListener, handleGameOver])

  return (
    <>
      <div className="absolute inset-0 z-10 h-screen w-full bg-black">
        {!isLoaded && (
          <div className="fixed z-20 h-full w-full">
            <AutoSizeImage src={'/images/unity_bg.png'} full priority />
            <Progressbar number={Math.round(loadingProgression * 100)} />
          </div>
        )}

        <Unity
          style={{
            width: '100%',
            height: '100%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          unityProvider={unityProvider}
        />
      </div>
    </>
  )
}

export default Anneagram
