/* eslint-disable @next/next/no-img-element */
import React from "react";

const FansSupport = () => {
  return (
    <div className="text-white container mx-auto pb-20 pt-10 lg:px-10 px-3">
      <h2 className="text-3xl font-bold text-center my-5">
        Your Fans can buy you a Chai
      </h2>
      <div className="grid grid-cols-3 gap-2 md:gap-5 justify-items-center">
        <div className="item flex flex-col items-center justify-center">
          <img
            className="bg-slate-400 rounded-full p-2"
            src="../Assets/GIFs/man.gif"
            width={70}
            height={70}
            alt="Fans want to help"
          />
        </div>
        <div className="item flex flex-col items-center justify-center">
          <img
            className="bg-slate-400 rounded-full p-2"
            src="../Assets/GIFs/coin.gif"
            width={60}
            height={60}
            alt="Fans want to contribute"
          />
        </div>
        <div className="item flex flex-col items-center justify-center">
          <img
            className="bg-slate-400 rounded-full p-2"
            src="../Assets/GIFs/group.gif"
            width={70}
            height={70}
            alt="Fans want to collaborate"
          />
        </div>
        <div className="item flex flex-col items-center justify-center">
          <p className="font-bold text-center text-small md:text-base">
            Fans want to help
          </p>
        </div>
        <div className="item flex flex-col items-center justify-center">
          <p className="font-bold text-center text-small md:text-base">
            Fans want to contribute
          </p>
        </div>
        <div className="item flex flex-col items-center justify-center">
          <p className="font-bold text-center text-small md:text-base">
            Fans want to collaborate
          </p>
        </div>
        <div className="item flex flex-col items-center justify-center">
          <p className="text-center text-small md:text-base">
            Your fans are available to support you
          </p>
        </div>
        <div className="item flex flex-col items-center justify-center">
          <p className="text-center text-small md:text-base">
            Your fans are willing to contribute financially
          </p>
        </div>
        <div className="item flex flex-col items-center justify-center">
          <p className="text-center text-small md:text-base">
            Your fans are ready to collaborate with you
          </p>
        </div>
      </div>
    </div>
  );
};

export default FansSupport;
