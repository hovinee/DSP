import clsx from 'clsx'
import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  type: 'text' | 'password'
  placeholder?: string
  setValue: Dispatch<SetStateAction<string>> | ((newValue: string) => void)
  textColor?: string
  bgColor?: string
  rounded?: string
  height?: string
  value?: string
  choices?: boolean
  watchEnabled?: boolean
  disabled?: boolean
  className?: string
}

interface StringProps {
  [key: string]: string
}

const inputTextColor: StringProps = {
  C1C1C1: 'text-C1C1C1',
}

const inputbgColor: StringProps = {
  F2F2F2: 'bg-F2F2F2 ',
}

const inputRounded: StringProps = {
  '5': 'rounded-[0.5rem]',
}

const inputHeight: StringProps = {
  '40': 'h-[4rem]',
}

const CSInput = ({
  type,
  value,
  setValue,
  placeholder,
  textColor,
  bgColor,
  rounded,
  height,
  choices,
  watchEnabled,
  disabled,
  className,
}: Props) => {
  return (
    <input
      className={clsx(
        'w-full border-none text-12 focus:outline-none',
        height ? inputHeight[height] : 'h-[4.4rem]',
        rounded ? inputRounded[rounded] : 'rounded-[1rem]',
        bgColor
          ? inputbgColor[bgColor]
          : disabled
            ? 'bg-gray-300'
            : 'bg-ECECEC',
        textColor ? inputTextColor[textColor] : 'text-565656',
        choices ? 'pl-[3.6rem] pr-[1.4rem]' : 'px-[1.4rem]',
        className,
      )}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      type={watchEnabled ? 'text' : type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
    />
  )
}

export default CSInput
