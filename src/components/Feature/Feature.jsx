import React from "react";
import FeatureItem from "./FeatureItem";
const features = [
  {
    key: "HG42h",
    icon: "fas fa-globe-americas",
    title: "Lorem ipsum dolor sit amet",
    detail: "Habitasse duis senectus aliquam enim id imperdiet.",
  },
  {
    key: "SSF4",
    icon: "far fa-clock",
    title: "Lorem ipsum dolor sit amet",
    detail: "Habitasse duis senectus aliquam enim id imperdiet.",
  },
  {
    key: "GH54",
    icon: "fas fa-gavel",
    title: "Lorem ipsum dolor sit amet",
    detail: "Habitasse duis senectus aliquam enim id imperdiet.",
  },
  {
    key: "RT88",
    icon: "fas fa-home",
    title: "Lorem ipsum dolor sit amet",
    detail: "Habitasse duis senectus aliquam enim id imperdiet.",
  },
];
const Feature = () => {
  return (
    <>
      <div className="container -my-32 mb-16 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature) => (
            <FeatureItem key={feature.key} feature={feature} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
