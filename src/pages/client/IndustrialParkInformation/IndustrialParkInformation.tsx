import React from 'react';
import './IndustrialParkInformation.scss';
import HeroSection from '@/components/client/HomePage/HeroSection'
import FeaturedProjects from '@/components/client/Products/FeaturedProjects'
import { featuredProjectsSecond } from '@/data/featuredProjectsData'

const IndustrialParkInformation: React.FC = () => {
    return (
        <>
            <div className="industrial-park-page">
                <HeroSection />
                <FeaturedProjects 
                    title="THÔNG TIN KHU CÔNG NGHIỆP" 
                    projects={featuredProjectsSecond} 
                    soLuong={3} 
                    slide={false} 
                />
            </div>
        </>
    );
};

export default IndustrialParkInformation;