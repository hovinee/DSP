import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Overlay = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-20" />
      {children}
    </div>
  )
}

export default Overlay
