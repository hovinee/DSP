import React from 'react'
import { getMainData } from '@lib/data'
import Banner from '@containers/main/Banner'
import Contents from '@containers/main/Contents'

export default async function Home() {
  const data = getMainData()

  return (
    <>
      <Banner data={data.banner} />
      <Contents data={data.contents} />
    </>
  )
}
