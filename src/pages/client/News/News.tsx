import React from 'react';
import './New.scss';
import HeroSection from '@/components/client/HomePage/HeroSection'
import FeaturedProjects from '@/components/client/Products/FeaturedProjects'
import { featuredProjectsSecond } from '@/data/featuredProjectsData'

const News: React.FC = () => {
    return (
        <>
            <div className="industrial-park-page">
                <HeroSection />
                <FeaturedProjects
                    title="TIN TỨC THỊ TRƯỜNG"
                    projects={featuredProjectsSecond}
                    soLuong={3}
                    slide={false}
                />
            </div>
        </>
    );
};

export default News;