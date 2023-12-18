import { UserModel } from '@models/user'

export interface Main {
  banner: {
    banner_image: string
    dsp_image: string
    intro1: string
    intro2: string
    intro3: string
  }
  contents: {
    title: string
    description: string
    type: string
    dsp_icon: string
    thumbnail: string
  }[]
}

export interface DSP {
  banner: {
    banner_image: string
    dsp_image: string
    intro1: string
  }
  contents: { title: string; intro: string }[]
  end: string
  aside: { title: string; image_url: string }[]
}

export interface Footer {
  meta: string
  apple: string
  google: string
}

export interface Intro {
  banner: {
    banner_image: string
    title: string
    intro: string
  }
  contents: {
    title: string
    description: string
    intro_image: string
  }[]
  end: {
    end_image: string
    title: string
    description: string
  }
  question: string[]
}

export type SessionUser = Omit<
  UserModel,
  'password' | 'isVerified' | 'isInit' | 'validationCode'
>

export interface Agreements {
  allAgreements: boolean
  over14: boolean
  serviceTerms: boolean
  privacyPolicy: boolean
}
