import chefsvg from "@/components/images/svg/3.png";
import clocksvg from "@/components/images/svg/clock-lines-svgrepo-com.svg";

import gif1 from "@/components/images/svg/gif/tapas2go-thumbs-up.gif";
import gif2 from "@/components/images/svg/gif/community.gif";

interface Props {
  title: string;
  complexity: string;
  time: string;
  foodImage: string;
  role?: string;
  className?: string;
  maxHeight?: string;
}

export default function CardSmall({
  title,
  complexity,
  time,
  foodImage,
  role,
  maxHeight,
}: Props) {
  return (
    <div className="z-0 flex flex-wrap relative text-center sm:hover:transform sm:hover:scale-110 sm:duration-300 rounded-xl">
      <picture>
        <img
          src={foodImage}
          alt="Food image."
          className="block my-0 mx-auto h-auto rounded-xl"
          style={{ maxHeight }}
        />
      </picture>
      <h1
        className="absolute bottom-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-xl font-bold text-white z-10 m-0 p-0 w-full"
        style={{ bottom: "17%", left: "50%" }}
      >
        {title}
      </h1>
      <div
        className="flex gap-2 absolute bottom-0 left-8 -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "2%", left: "20%" }}
      >
        <button
          className={`${
            complexity === "Easy"
              ? "bg-green-500"
              : complexity === "Medium"
              ? "bg-yellow-500"
              : "bg-red-500"
          } text-white text-xs sm:text-sm py-1 px-2 rounded-xl`}
        >
          {complexity}
        </button>
      </div>
      <div
        className="flex gap-2 absolute -translate-x-2/4 -translate-y-2/4 text-white z-10 m-0 p-0 w-1/5"
        style={{ bottom: "2%", right: "13%" }}
      >
        <picture>
          <img
            src={clocksvg.src}
            alt="Clock icon."
            className="hidden w-2 h-2 sm:w-8 sm:h-8"
          />
        </picture>
        <button className="text-white text-xs sm:text-sm py-1 px-2 z-0 rounded-xl bg-slate-800">
          <h2 className="flex justify-center items-center text-xs sm:text-sm">
            {time}
          </h2>
        </button>
      </div>
      {/* <div
        className={`absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent rounded-xl `}
      ></div> */}
      <div className="">
        <div
          className={`absolute bottom-0 left-0 w-full h-full shadow-lg shadow-slate-800 rounded-xl ring-1 overflow-hidden ${
            role === "chef" ? " border-gradient " : ""
          }`}
          style={{ borderColor: role === "chef" ? "border-red-500" : "" }}
        ></div>
      </div>
      {role === "chef" ? (
        <>
          <div className="w-16 h-16 z-50 -top-3 -right-2 absolute sm:-top-12 sm:-right-2 sm:w-24 sm:h-24 ">
            <picture>
              <img className="z-50" src={gif1.src} alt="Chef icon." />
            </picture>
          </div>
        </>
      ) : null}
    </div>
  );
}
