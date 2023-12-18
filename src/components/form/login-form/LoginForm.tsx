'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import Section from '@components/section/Section'
import CSButton from '@components/ui/button/CSButton'
import CSInput from '@components/ui/input/CSInput'
import CSLabel from '@components/ui/label/CSLabel'
import CSText from '@components/ui/text/CSText'
import Loading from '@components/loading/Loading'

const SignInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const [watchEnabled, setWatchEnabled] = useState<boolean>(false)

  //로딩
  const [loading, setLoading] = useState<boolean>(false)

  const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (res && res.error) {
        setError('올바른 비밀번호를 입력해주세요')
        return
      }
      if (res && res.ok) {
        setLoading(false)
        alert('로그인 되었습니다')
        router.replace('/')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
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
        로그인
      </CSText>
      <form onSubmit={handleSumit} className="flex flex-col">
        <CSInput
          type="text"
          setValue={setEmail}
          className="mt-[4.7rem]"
          placeholder="이메일"
        />

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
        <div className="mt-[0.9rem] flex justify-between">
          <CSText
            size="11"
            weight="normal"
            color={'red'}
            className="font-inter"
          >
            {error ? error : ''}
          </CSText>

          <CSText size="12" weight="normal" color="white">
            비밀번호 찾기
          </CSText>
        </div>
        <CSButton
          height="45"
          rounded="10"
          color="fff"
          className="mt-[2rem] text-21 font-bold text-[#383838]"
        >
          로그인
        </CSButton>

        <Link
          className="mt-[2.5rem] text-right text-sm"
          href={'/auth/register'}
        >
          <CSText
            size="12"
            weight="normal"
            color="white"
            className="text-center"
          >
            회원이 아니신가요?
            <span className="underline">회원가입</span>
          </CSText>
        </Link>
      </form>
      {loading && <Loading />}
    </Section>
  )
}
export default SignInForm
