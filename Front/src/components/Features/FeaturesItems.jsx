import React from "react";
import PropTypes from "prop-types";

/*
 * Component representing a single feature item.
 * @param {object} props - The props object containing icon, alt, title, and content of the feature item.
 * @returns {JSX.Element} A single feature item.
 */

const FeaturesItems = ({ icon, alt, title, content }) => {
    return (
        <div className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{content}</p>
        </div>
    );
};

FeaturesItems.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default FeaturesItems;
