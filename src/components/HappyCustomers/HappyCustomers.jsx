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
        <div className=" relative py-8 text-center text-black">
          <h1 className="text-4xl py-2 font-Poppins font-semibold">
            Visi <span className="text-black">Misi</span> Mahapala
          </h1>
          <p>
           
          </p>
          <div className="flex justify-between items-center py-16">
            <div className="ml-36">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
              Memajukan
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                lorem
              </p>
            </div>

            <div className="">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
              Memajukan
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                lorem ipsum
              </p>
            </div>

            <div className="mr-36">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
              Memajukan
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
