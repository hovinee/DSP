import Overlay from '@components/overlay/Overlay'
import CSText from '@components/ui/text/CSText'

interface Props {
  number: number
}

const Progressbar = ({ number }: Props) => {
  return (
    <Overlay progress>
      <div className="z-10 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-green-700 p-0.5 text-center text-xs font-medium leading-none  text-blue-100"
          style={{ width: `${number}%` }}
        />
      </div>
      <CSText
        size="18"
        color="white"
        weight="bold"
        className="z-10 mt-[1.5rem]"
      >
        Loading ... ({number}%)
      </CSText>
    </Overlay>
  )
}
export default Progressbar
