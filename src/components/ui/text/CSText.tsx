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
  '12': 'text-12',
  '15': 'text-15',
  '16': 'text-16',
  '18': 'text-18',
  '21': 'text-21',
  '35': 'text-35',
  '60': 'text-60',
  '12 xl:14': 'text-12 xl:text-14',
  '12 xl:18': 'text-12 xl:text-18',
  '15 xl:23': 'text-15 xl:text-23',
  '21 xl:31': 'text-21 xl:text-31',
  '37 xl:54': 'text-37 xl:text-54',
}

const fontColor: StringProps = {
  black: 'text-black',
  white: 'text-white',
  C0C0C0: 'text-C0C0C0',
  'white hover:D9D9D9': 'text-white hover:text-D9D9D9',
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
