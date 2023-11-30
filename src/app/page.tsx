import React from 'react'
import { getMainData } from '@lib/data'
import Banner from '@containers/main/Banner'
import Contents from '@containers/main/Contents'
import { headers } from 'next/headers'
import { detectDevice } from '@utils/method'

export default async function Home() {
  const data = getMainData()
  const requestHeaders = headers()
  const userAgent = requestHeaders.get('user-agent')

  const deviceInfo = detectDevice(userAgent!)
  console.log('env테스트')
  return (
    <>
      <Banner data={data.banner} />
      <Contents data={data.contents} deviceInfo={deviceInfo} />
    </>
  )
}
