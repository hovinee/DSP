import fs from 'fs'

// Get Slugs

export function getSlugs(dirPath: string) {
  return fs.readdirSync(dirPath)
}
