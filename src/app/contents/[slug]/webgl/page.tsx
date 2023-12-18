'use client'

import { Unity, useUnityContext } from 'react-unity-webgl'
import React, { useState, useEffect, useCallback } from 'react'
import { cfWorkerUrl } from '@utils/url'

const Anneagram = () => {
  const [category, setCategory] = useState()

  const handleGameOver = useCallback((data: any) => {
    console.log(data, 'data')
    setCategory(data)
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
    addEventListener('CompleteToLoadScene', handleGameOver)
    return () => {
      removeEventListener('CompleteToLoadScene', handleGameOver)
    }
  }, [addEventListener, removeEventListener, handleGameOver])

  function handleClickSpawnEnemies() {
    sendMessage('MessageHandler', 'OnClickedStart_Intro')
  }

  return (
    <div className="h-screen w-full">
      {!isLoaded && (
        <p className="text-white">
          Loading Application... {Math.round(loadingProgression * 100)}%
        </p>
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
      <button className="h-12 w-20 bg-white" onClick={handleClickSpawnEnemies}>
        Spawn Enemies
      </button>
    </div>
  )
}

export default Anneagram
