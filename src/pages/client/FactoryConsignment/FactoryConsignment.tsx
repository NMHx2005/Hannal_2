import React from 'react';
import './FactoryConsignment.scss';
import HeroSection from '@/components/client/HomePage/HeroSection'
import FeaturedProjects from '@/components/client/Products/FeaturedProjects'
import { featuredProjectsSecond } from '@/data/featuredProjectsData'

const FactoryConsignment: React.FC = () => {
    return (
        <>
            <div className="industrial-park-page">
                <HeroSection />
                <FeaturedProjects
                    title="KÝ GỬI NHÀ XƯỞNG"
                    projects={featuredProjectsSecond}
                    soLuong={3}
                    slide={false}
                />
            </div>
        </>
    );
};

export default FactoryConsignment;