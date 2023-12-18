'use client'

import { Unity, useUnityContext } from 'react-unity-webgl'
import React, { useState, useEffect, useCallback } from 'react'
import { cfWorkerUrl } from '@utils/url'
import Overlay from '@components/overlay/Overlay'

const UnityWebgl = () => {
  const {
    unityProvider,
    addEventListener,
    removeEventListener,
    loadingProgression,
    isLoaded,
    sendMessage,
  } = useUnityContext({
    loaderUrl: `${cfWorkerUrl}/Test/Build_Web.loader.js`,
    dataUrl: `${cfWorkerUrl}/Test/Build_Web.data`,
    frameworkUrl: `${cfWorkerUrl}/Test/Build_Web.framework.js`,
    codeUrl: `${cfWorkerUrl}/Test/Build_Web.wasm`,
  })

  // useEffect(() => {
  //   addEventListener('OnSplashEnd', handleGameOver)
  //   return () => {
  //     removeEventListener('OnSplashEnd', handleGameOver)
  //   }
  // }, [addEventListener, removeEventListener, handleGameOver])

  return (
    <div className="absolute inset-0 z-10 h-screen w-full bg-black">
      {!isLoaded && (
        <Overlay>
          <p className="z-20 text-21 text-white">
            Loading Application... {Math.round(loadingProgression * 100)}%
          </p>
        </Overlay>
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
  )
}

export default UnityWebgl
