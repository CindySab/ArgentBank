import React from "react";
import FeaturesItems from "./FeaturesItems";
import featuresItemsData from "../../data/featuresItemsData";

/*
 * Component representing a list of features.
 * @returns {JSX.Element} List of features.
 */

const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresItemsData.map((item) => (
                <FeaturesItems
                    key={item.id}
                    icon={item.icon}
                    alt={item.alt}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </section>
    );
};

export default Features;
