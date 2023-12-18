interface Props {
  children: React.ReactNode
  className?: string
}

const CSLabel = ({ children, className }: Props) => {
  return <label className={`relative ${className ?? ''}`}>{children}</label>
}

export default CSLabel
