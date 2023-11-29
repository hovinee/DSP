interface Props {
  children: React.ReactNode
}

const BannerSection = ({ children }: Props) => {
  return (
    <section className="relative mt-[8.4rem] h-[50rem] px-[4.4rem] xl:h-[100%] xl:px-0">
      {children}
    </section>
  )
}

export default BannerSection
