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
