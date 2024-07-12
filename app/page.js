/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import FansSupport from "@/components/Fans";
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if this is the first time the application loads
      const isFirstLoad = sessionStorage.getItem("isFirstLoad");
      if (!isFirstLoad) {
        // Set flag in session storage to indicate first load is done
        sessionStorage.setItem("isFirstLoad", "true");

        // Sign out the user
        signOut();
      }
    }
  }, []);
  return (
    <>
      <div className="flex justify-center text-white items-center h-[44vh] flex-col gap-4 md:px-5 px-0 text-xs md:text-base">
        <div className="font-bold md:text-5xl flex gap-2 justify-center items-center text-3xl">
          Get Me a Chai
          <span>
            <img src="../Assets/GIFs/tea.gif" width={44} />
          </span>
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start Now!
        </p>
        <div>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Here
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <FansSupport />

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-20 pt-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center my-7">
          Learn More about us
        </h2>
        <div className="w-[90vw] md:w-[50%] md:h-[40vh] lg:w-[65%] lg:h-[55vh] xl:w-[50%] xl:h-[55vh]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8lFFHe5nrY8?si=Tohj2ubEavn9hAwu"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
