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
    <div className=" py-20">
      <div className="text-center w-full">
        <h1 className=" text-5xl font-semibold">Berita Terbaru</h1>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-10 px-6">
        {reviews.map((review) => (
          <Review key={review.key} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
