import { DSP, Footer, Intro, Main } from '@utils/types'
import fs from 'fs'
import path from 'path'

const Directory = path.join(process.cwd(), 'src/data')

export function getMainData(): Main {
  const fullPath = path.join(Directory, 'main.json')
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Main
  let data: Main
  data = { ...fileContents }
  return { ...data }
}

export function getContentsData(slug: string): DSP {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = path.join(Directory, `${realSlug}.json`)
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as DSP
  let data: DSP
  data = { ...fileContents }

  return { ...data }
}

export function getFooterData(): Footer {
  const fullPath = path.join(Directory, 'footer.json')
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Footer
  let data: Footer
  data = { ...fileContents }
  return { ...data }
}

export function getIntroData(): Intro {
  const fullPath = path.join(Directory, 'intro.json')
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Intro
  let data: Intro
  data = { ...fileContents }
  return { ...data }
}
