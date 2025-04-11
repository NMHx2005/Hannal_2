import { HeroSlide as HeroSlideType } from '../../../data/heroData'

interface HeroSlideProps {
  slide: HeroSlideType;
}

const HeroSlide = ({ slide }: HeroSlideProps) => {
  return (
    <div className=" h-[600px] w-screen">
      <img
        src={slide.image}
        alt={slide.title}
        className="bg_home_slide"
      />
    </div>
  )
}

export default HeroSlide