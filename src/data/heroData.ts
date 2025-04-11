export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/images/nha-xuong-dep.jpg',
    title: 'Kho Xưởng Đẹp',
    description: 'Chuyên dịch vụ bất động sản công nghiệp và khu công nghiệp'
  },
  {
    id: 2,
    image: '/images/Nha-xuong-dep-3.jpg',
    title: 'Giải Pháp Toàn Diện',
    description: 'Cho doanh nghiệp của bạn'
  },
  {
    id: 3,
    image: '/images/kho-xuong-dep-cho-thue-1.jpg',
    title: 'Đa Dạng Lựa Chọn',
    description: 'Kho xưởng đa dạng về diện tích và vị trí'
  }
]; 