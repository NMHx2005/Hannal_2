import React from 'react';
import './IndustrialLand.scss';
import FeaturedProjects from '@/components/client/Products/FeaturedProjects'
import { featuredProjectsSecond } from '@/data/featuredProjectsData'
import SearchSection from '@/components/client/Search/SearchSection'
const IndustrialLand: React.FC = () => {
    return (
        <>
            <SearchSection />
            <div className="industrial-park-page">
                
                <FeaturedProjects
                    title="ĐẤT CÔNG NGHIỆP"
                    projects={featuredProjectsSecond}
                    soLuong={3}
                    slide={false}
                />
            </div>
        </>
    );
};

export default IndustrialLand;