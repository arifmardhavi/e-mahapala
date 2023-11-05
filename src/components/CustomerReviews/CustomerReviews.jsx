import React from "react";
import rashed from "../../images/review/1.png";
import sohel from "../../images/review/1.png";
import lipu from "../../images/review/1.png";
import Review from "./Review";
const reviews = [
  {
    key: "HG42h",
    name: "Rafi aditiya",
    img: `${rashed}`,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
  },
  {
    key: "SSF4",
    name: "lorem ipsu",
    img: `${sohel}`,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
  },
  {
    key: "GH54",
    name: "lorem ipsum ",
    img: `${lipu}`,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
  },
];

const CustomerReviews = () => {
  return (
    <div className="container py-24">
      <div className="text-center w-full">
        <p className="text-primary font-semibold">Lorem ipsum dolor sit amet</p>
        <h1 className="py-4 text-5xl font-semibold">lorem ipsum</h1>
        <p className="">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
        et<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-20">
        {reviews.map((review) => (
          <Review key={review.key} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
