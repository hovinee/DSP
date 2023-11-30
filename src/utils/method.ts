export const detectDevice = (userAgent: string) => {
  // 정규 표현식을 사용하여 간단하게 판별
  const isMobile = /Mobile/i.test(userAgent)
  const isTablet = /Tablet/i.test(userAgent)
  const isWindows = /Windows/i.test(userAgent)

  // 결과 반환
  if (isMobile) {
    return 'Mobile'
  } else if (isTablet) {
    return 'Tablet'
  } else if (isWindows) {
    return 'Windows'
  } else {
    return '이 기기는 모바일, 태블릿, 윈도우즈 중 어떤 것에도 해당되지 않습니다.'
  }
}
