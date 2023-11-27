export { default } from 'next-auth/middleware'

export const config = { matcher: ['/auth/userInfo'] }

//userInfo로 이동했을때 auth 정보가 없으면 메인페이지로 리다이렉션
