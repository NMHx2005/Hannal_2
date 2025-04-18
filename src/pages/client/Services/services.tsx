import React from 'react';
import './service.scss';
import HeroSection from '@/components/client/HomePage/HeroSection'
import FeaturedProjects from '@/components/client/Products/FeaturedProjects'
import { featuredProjectsSecond } from '@/data/featuredProjectsData'

const Services: React.FC = () => {
    return (
        <>
            <div className="industrial-park-page">
                <HeroSection />
                <FeaturedProjects
                    title="DỊCH VỤ NHÀ XƯỞNG"
                    projects={featuredProjectsSecond}
                    soLuong={3}
                    slide={false}
                />
            </div>
        </>
    );
};

export default Services;