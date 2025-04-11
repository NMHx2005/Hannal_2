import FeaturedProjects from '@/components/client/HomePage/FeaturedProjects'
import HeroSection from '@/components/client/HomePage/HeroSection'
import SearchSection from '@/components/client/HomePage/SearchSection'
import { featuredProjects, featuredProjectsEvent, featuredProjectsSecond } from '@/data/featuredProjectsData'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <SearchSection />
      <FeaturedProjects title="KHO XƯỞNG TIÊU BIỂU" projects={featuredProjects} soLuong={3} slide={true} />
      <FeaturedProjects title="KHO XƯỞNG ĐẸP BÁN" projects={featuredProjectsSecond} soLuong={3} slide={false} />
      <FeaturedProjects title="KHO XƯỞNG ĐẸP CHO THUÊ" projects={featuredProjectsSecond} soLuong={3} slide={false} />


      <FeaturedProjects title="DỊCH VỤ NHÀ XƯỞNG" projects={featuredProjectsSecond} soLuong={4} slide={false} />
      <FeaturedProjects title="TIN TỨC CẬP NHẬT" projects={featuredProjectsEvent} soLuong={4} slide={false} />
    </div>
  )
}

export default HomePage 