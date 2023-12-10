import React from "react";
import FeatureItem from "./FeatureItem";
import { Link, useHref } from "react-router-dom"
const features = [

  {
    key: "SSF4",
    icon: "far fa-clock",
    title: "Blog",
    detail: "Habitasse duis senectus aliquam enim id imperdiet.",
  },
  {
    key: "GH54",
    icon: "http://www.w3.org/2000/svg",
    title: "Dokumentasi",
    detail: "Habitasse duis senectus aliquam enim id imperdiet.",
  },
  {
    key: "RT88",
    icon: "fas fa-home",
    title: "Kontak",
    detail: "Habitasse duis senectus aliquam enim id imperdiet.",
  },
];
const Feature = () => {
  return (
    <>
      <div className=" -my-24 mb-16 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature) => (
                 <Link to={`/${feature.title}`}>

            <FeatureItem key={feature.key} feature={feature} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
