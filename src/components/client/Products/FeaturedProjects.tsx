import { Carousel } from 'antd';
import ProjectCard from './ProjectCard';
import './FeaturedProjects.scss';

export interface FeaturedProject {
  id: number;
  title: string;
  image: string;
  location: string;
  area: string;
  price?: string;
  description?: string;
}

interface IProps {
  title: string;
  projects: FeaturedProject[];
  soLuong: number;
  slide: boolean;
}

const FeaturedProjects = ({ title, projects, soLuong, slide }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: soLuong,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="featured-projects">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>

        {slide ? (
          <Carousel {...settings} className="featured-projects-carousel">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} soLuong={soLuong} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="featured-projects-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} soLuong={soLuong} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;