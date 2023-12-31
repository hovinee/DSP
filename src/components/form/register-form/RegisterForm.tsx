'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

import dynamic from 'next/dynamic'
import Section from '@components/section/Section'
import CSButton from '@components/ui/button/CSButton'
import CSInput from '@components/ui/input/CSInput'
import CSLabel from '@components/ui/label/CSLabel'
import CSText from '@components/ui/text/CSText'
import { UserModel } from '@models/user'
import { validateEmail, validatePassword } from '@utils/validation_front'
import { postValidationCode, postVerify, postRegister } from 'app/api/auth'
import VerificationCode from './VerificationCode'

const Loading = dynamic(() => import('../../loading/Loading'), {
  ssr: false,
})

const SignUpForm = () => {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [verificationCode, setVerificationCode] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordCheck, setPasswordCheck] = useState<string>('')

  const [watchEnabled, setWatchEnabled] = useState<boolean>(false)
  const [verficationEnabled, setVerficationEnabled] = useState<boolean>(false)
  const [verifiedCode, setVerifiedCode] = useState<boolean>(false)
  const [alreadyVerifiedCode, setAlreadyVerifiedCode] = useState<boolean>(false)

  //로딩
  const [loading, setLoading] = useState<boolean>(false)

  const handleVerificationCode = async () => {
    const res = await postValidationCode(email)
    const data = await res.json()

    if (data.result === 1200) {
      setAlreadyVerifiedCode(true)
      setVerifiedCode(true)
    } else if (data.result === 1000) {
      setVerficationEnabled(true)
    }
  }

  const handleVerify = async () => {
    //TODO: try catch 문으로 로직 수정
    const res = await postVerify(email, verificationCode)
    const data = await res.json()
    if (data.result === 1000) {
      setVerifiedCode(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !name ||
      validateEmail(email).error ||
      validatePassword(password).error ||
      verifiedCode == false ||
      password !== passwordCheck
    )
      return alert('회원가입 정보를 확인해주세요')

    try {
      setLoading(true)
      const newUser: UserModel = {
        email: email,
        name: name,

        password: password,
      }

      const res = await postRegister(newUser)

      if (res.ok) {
        const form = e.target as HTMLFormElement
        form.reset()

        setLoading(false)
        alert('회원가입이 완료되었습니다.')
        router.push('/')
      } else {
        setLoading(false)
        console.log('User registration failed.')
      }
    } catch (error) {
      console.log('Error during registration', error)
      setLoading(false)
    }
  }

  return (
    <Section className="m-auto w-[35rem] rounded-2xl bg-white/20 p-[2rem]">
      <CSText
        size="21"
        weight="bold"
        color="white"
        className="font-inter text-center"
      >
        회원가입
      </CSText>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <CSInput
          type="text"
          setValue={setName}
          placeholder="이름"
          className="mt-[4.7rem]"
        />

        <CSLabel className="mt-[2.7rem]">
          <CSInput
            type="text"
            setValue={setEmail}
            disabled={verifiedCode}
            placeholder="이메일"
          />
          <CSText
            size="14"
            weight="bold"
            color="00A886"
            className="absolute right-[1.3rem] top-1/2 -translate-y-1/2"
            onClick={handleVerificationCode}
          >
            {verficationEnabled ? '재전송' : '인증'}
          </CSText>
        </CSLabel>
        {email && validateEmail(email).error && (
          <CSText
            size="11"
            weight="normal"
            color="white"
            className="font-inter mt-[0.5rem]"
          >
            올바른 이메일 형식을 입력해주세요.
          </CSText>
        )}

        {alreadyVerifiedCode && (
          <CSText
            size="11"
            weight="normal"
            color="white"
            className="font-inter mt-[0.5rem]"
          >
            이미 인증하신 이메일 주소 입니다.
          </CSText>
        )}

        {verficationEnabled && (
          <VerificationCode
            setVerificationCode={setVerificationCode}
            verificationCode={verificationCode}
            verifiedCode={verifiedCode}
            onClick={handleVerify}
          />
        )}

        <CSLabel className="mt-[2.7rem]">
          <CSInput
            type="password"
            setValue={setPassword}
            watchEnabled={watchEnabled}
            placeholder="비밀번호"
          />
          <Image
            src={`/images/eye-${watchEnabled ? 'open' : 'close'}.png`}
            className="absolute right-[1.3rem] top-1/2 h-auto w-[1.5rem] -translate-y-1/2"
            width={0}
            height={0}
            alt={`eye-${watchEnabled ? 'open' : 'close'}`}
            onClick={() => setWatchEnabled(!watchEnabled)}
          />
        </CSLabel>
        <CSText
          size="11"
          weight="normal"
          color={password && validatePassword(password).error ? 'red' : 'white'}
          className="font-inter mt-[0.5rem]"
        >
          비밀번호는 8-20 이하의 영문+숫자 조합입니다.
        </CSText>

        <CSLabel className="mt-[2.7rem]">
          <CSInput
            type="password"
            setValue={setPasswordCheck}
            watchEnabled={watchEnabled}
            placeholder="비밀번호 확인"
          />
          <Image
            src={`/images/eye-${watchEnabled ? 'open' : 'close'}.png`}
            className="absolute right-[1.3rem] top-1/2 h-auto w-[1.5rem] -translate-y-1/2"
            width={0}
            height={0}
            alt={`eye-${watchEnabled ? 'open' : 'close'}`}
            onClick={() => setWatchEnabled(!watchEnabled)}
          />
        </CSLabel>
        {password && password === passwordCheck && (
          <CSText
            size="11"
            weight="normal"
            color="white"
            className="font-inter mt-[0.5rem]"
          >
            인증번호가 확인되었습니다.
          </CSText>
        )}

        <CSButton
          height="45"
          rounded="10"
          color="fff"
          className="mt-[2rem] text-21 font-bold text-[#383838]"
        >
          회원가입
        </CSButton>

        <Link className="mt-[1.7rem] text-center" href={'/auth/login'}>
          <CSText size="12" weight="normal" color="white">
            회원이 아니신가요?
            <span className="underline">로그인</span>
          </CSText>
        </Link>
      </form>
      {loading && <Loading />}
    </Section>
  )
}
export default SignUpForm
