import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  width?: string
  height?: string
  color?: string
  rounded?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
}

interface StringProps {
  [key: string]: string
}

const buttonWidth: StringProps = {
  '50': 'w-[5rem]',
  '148': 'w-[14.8rem]',
  '230': 'w-[23rem]',
}

const buttonHeight: StringProps = {
  '45': 'h-[4.5rem]',
}

const buttonColor: StringProps = {
  fff: 'bg-white',
}

const buttonRounded: StringProps = {
  '10': 'rounded-[1rem]',
  '30': 'rounded-[3rem]',
}

const CSButton = ({
  children,
  className,
  width,
  height,
  color,
  rounded,
  type,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'grid place-items-center',
        height && buttonHeight[height],
        width ? buttonWidth[width] : 'w-full',
        rounded && buttonRounded[rounded],
        color && buttonColor[color],
        className,
      )}
    >
      {children}
    </button>
  )
}

export default CSButton
