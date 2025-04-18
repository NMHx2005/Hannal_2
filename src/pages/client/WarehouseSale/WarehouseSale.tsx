import React from 'react';
import './WarehouseSale.scss';
import FeaturedProjects from '@/components/client/Products/FeaturedProjects'
import { featuredProjectsSecond } from '@/data/featuredProjectsData'
import SearchSection from '@/components/client/Search/SearchSection'
const WarehouseSale: React.FC = () => {
    return (
        <>
            <SearchSection />
            <div className="industrial-park-page">

                <FeaturedProjects
                    title="KHO XƯỞNG BÁN"
                    projects={featuredProjectsSecond}
                    soLuong={3}
                    slide={false}
                />
            </div>
        </>
    );
};

export default WarehouseSale;