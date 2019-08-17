import React from 'react';
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({img, styleClass, title1, title2, h1Style, children }) => {
    return (
        <BackgroundImage className={styleClass} fluid={img}>
            <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                {title1}<br/>{title2}
            </h1>
            {children}
        </BackgroundImage>
    );
};

export default BackgroundSection;

BackgroundSection.defaultProps = {
    title1: "default title 1",
    styleClass: "default-background"
}
