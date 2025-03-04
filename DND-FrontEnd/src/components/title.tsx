import React from 'react';

interface TitleProps {
    title: string;
    description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
    return (
        <div className="title">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Title;