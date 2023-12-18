import CSButton from '@components/ui/button/CSButton'
import CSInput from '@components/ui/input/CSInput'
import CSLabel from '@components/ui/label/CSLabel'
import CSText from '@components/ui/text/CSText'
import { AnimatePresence, motion } from 'framer-motion'
import { Timer } from 'hooks/use-timer'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  verificationCode: string
  setVerificationCode: Dispatch<SetStateAction<string>>
  verifiedCode: boolean
  onClick: () => void
}

const VerificationCode = ({
  verificationCode,
  setVerificationCode,
  verifiedCode,
  onClick,
}: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="verificationCode"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-[2.7rem]"
      >
        <div className="flex gap-[0.6rem]">
          <CSLabel className="flex-1">
            <CSInput
              type="text"
              setValue={setVerificationCode}
              disabled={verifiedCode}
              placeholder="인증번호"
            />
            <div className=" absolute right-[1.3rem] top-1/2 -translate-y-1/2">
              <Timer />
            </div>
          </CSLabel>

          <CSButton
            onClick={onClick}
            width="50"
            height="45"
            rounded="10"
            color="fff"
            className="text-16 font-bold text-[#383838]"
            type="button"
          >
            확인
          </CSButton>
        </div>
        {verifiedCode && (
          <CSText
            size="11"
            weight="normal"
            color="white"
            className="font-inter mt-[0.5rem]"
          >
            비밀번호가 확인되었습니다.
          </CSText>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default VerificationCode
