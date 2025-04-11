import { Carousel } from 'antd'
import { heroSlides } from '../../../data/heroData'
import HeroSlide from './HeroSlide'

const HeroSection = () => {
  return (
    <section className="hero-section w-full">
      <Carousel 
        autoplay 
        className="h-[600px] w-full"
        draggable
        swipeToSlide
        dots={{ className: 'custom-dots' }}
      >
        {heroSlides.map((slide) => (
          <HeroSlide key={slide.id} slide={slide} />
        ))}
      </Carousel>
    </section>
  )
}

export default HeroSection 