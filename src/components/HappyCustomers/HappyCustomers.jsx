import React from "react";
import happyClient from "../../images/happyCl.jpg";
const HappyCustomers = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center bg-fixed w-full"
        style={{
          backgroundImage: `url(${happyClient})`,
        }}
      >
        <div className="opacity-80 absolute bg-black  w-full"></div>
        <div className="container relative py-8 text-center text-black">
          <h1 className="text-4xl py-2 font-Poppins font-semibold">
            lorem <span className="text-black">lorem</span> lorem
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <div className="flex justify-between items-center py-16">
            <div className="ml-36">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
              lorem+
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                lorem
              </p>
            </div>

            <div className="">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
              lorem
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                lorem ipsum
              </p>
            </div>

            <div className="mr-36">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
              lorem
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomers;
