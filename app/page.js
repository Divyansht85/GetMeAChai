/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white items-center h-[44vh] flex-col gap-4">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">
          Buy Me a Chai
          <span>
            <img src="../Assets/GIFs/tea.gif" width={44} />
          </span>
        </div>
        <p>
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

      <div className="text-white container mx-auto pb-20 pt-10">
        <h2 className="text-3xl font-bold text-center my-5">
          Your Fans can buy you a Chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="../Assets/GIFs/man.gif"
              width={80}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              src="../Assets/GIFs/coin.gif"
              width={60}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              src="../Assets/GIFs/group.gif"
              width={80}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-20 pt-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center my-7">
          Learn More about us
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8lFFHe5nrY8?si=Tohj2ubEavn9hAwu"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
