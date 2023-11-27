interface Props {
  weight?: string
  size: string
  color: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

interface StringProps {
  [key: string]: string
}

const fontSize: StringProps = {
  '10': 'text-10',
  '11': 'text-11',
  '12': 'text-12',
  '14': 'text-14',
  '15': 'text-15',
  '16': 'text-16',
  '17': 'text-17',
  '18': 'text-18',
  '21': 'text-21',
  '25': 'text-25',
  '31': 'text-31',
  '37': 'text-37',
  '54': 'text-54',
  '12 xl:14': 'text-12 xl:text-14',
  '12 xl:18': 'text-12 xl:text-18',
  '17 xl:25': 'text-17 xl:text-25',
  '21 xl:31': 'text-21 xl:text-31',
  '37 xl:54': 'text-37 xl:text-54',
}

const fontColor: StringProps = {
  black: 'text-black',
  white: 'text-white',
}

const fontWeight: StringProps = {
  normal: 'font-normal', //400
  semiBold: 'font-semibold', //600
  bold: 'font-bold', //700
}

const CSText = ({
  weight,
  size,
  color,
  children,
  className,
  onClick,
}: Props) => {
  return (
    <p
      onClick={onClick}
      className={`${fontSize[size]} ${fontColor[color]} ${
        fontWeight[weight ? weight : 'normal']
      } ${className ?? ''}`}
    >
      {children}
    </p>
  )
}

export default CSText
