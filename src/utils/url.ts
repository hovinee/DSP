export const getBaseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.labkid-industry.com/'

export const cfWorkerUrl = 'https://labkid-industry-worker.team3.workers.dev'
