import { Link } from 'react-router-dom';
import { FeaturedProject } from '../../../data/featuredProjectsData';

interface ProjectCardProps {
  project: FeaturedProject;
  soLuong: number;
}

const ProjectCard = ({ project, soLuong }: ProjectCardProps) => {
  return (
    <div className={soLuong === 3 ? 'project-card' : 'project-card-4'}>
      <Link to={`/kho-xuong-ban/${project.id}`}>
        <div className="image-container">
          <img
            className={`img-${soLuong}`}
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className="content">
          <h3>{project.title}</h3>
          <div className="is-divider"></div>
          <p>{project.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;