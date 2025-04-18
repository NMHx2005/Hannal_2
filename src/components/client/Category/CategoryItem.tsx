import React from 'react';
import { Card } from 'antd';
import './CategoryItem.scss';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
    category: {
        id: string;
        title: string;
        content: string;
        image: string;
    };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        <>
            <Link to={`/dich-vu-khac/thiet-ke/${category.id}`}>
                <Card className="category-item" hoverable>
                    <div className="category-image">
                        <img src={category.image} alt={category.title} />
                    </div>
                    <div className="category-content">
                        <h3 className="category-title">{category.title}</h3>
                        <p className="category-description">{category.content}</p>
                    </div>
                </Card>
            </Link>
        </>
    );
};

export default CategoryItem;