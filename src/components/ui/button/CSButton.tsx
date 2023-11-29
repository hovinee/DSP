interface Props {
  children: React.ReactNode
  className?: string
  width?: string
  height?: string
  color?: string
  rounded?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface StringProps {
  [key: string]: string
}

const buttonWidth: StringProps = {
  '230': 'w-[23rem]',
  '148': 'w-[14.8rem]',
}

const buttonHeight: StringProps = {
  '45': 'h-[4.5rem]',
}

const buttonColor: StringProps = {
  fff: 'bg-white',
}

const buttonRounded: StringProps = {
  '30': 'rounded-[3rem]',
}

const CSButton = ({
  children,
  className,
  width,
  height,
  color,
  rounded,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`grid ${height && buttonHeight[height]} ${
        width ? buttonWidth[width] : 'w-full'
      } place-items-center ${rounded && buttonRounded[rounded]}
       ${color && buttonColor[color]} ${className ?? ''}`}
    >
      {children}
    </button>
  )
}

export default CSButton
