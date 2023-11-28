import Image from 'next/image'

interface Props {
  src: string
  className?: string
  onClick?: () => void
  rounded?: string
  roundedTop?: number
  full?: boolean
  priority?: boolean
}

interface StringProps {
  [key: string]: string
}

const borderRadius: StringProps = {
  '1': 'rounded-[1rem]',
  '2': 'rounded-[2rem]',
  '50%': 'rounded-[50%]',
}

const borderTopRadius: StringProps = {
  '0.6': 'rounded-t-[0.6rem]',
  1.8: 'rounded-t-[1.8rem]',
}
const AutoSizeImage = ({
  src,
  className,
  onClick,
  rounded,
  roundedTop,
  full = false,
  priority = false,
}: Props) => {
  return (
    <>
      {full ? (
        <Image
          src={src}
          width={0}
          height={0}
          sizes="100%"
          className={`h-full w-full ${
            roundedTop ? borderTopRadius[roundedTop] : ''
          }`}
          alt=""
          priority={priority}
        />
      ) : (
        <div className={`relative ${className ?? ''}`} onClick={onClick}>
          <Image
            src={src}
            fill
            sizes="100%"
            className={`object-cover ${rounded ? borderRadius[rounded] : ''} ${
              roundedTop ? borderTopRadius[roundedTop] : ''
            } `}
            alt=""
            priority={priority}
          />
        </div>
      )}
    </>
  )
}

export default AutoSizeImage
