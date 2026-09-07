import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { chefMainCard } from "@/components/Profiles/ChefProfile";
import photo1 from "../../components/images/chefimage/gordonram.jpeg";
import photo2 from "../../components/images/chefimage/jemieolif.jpg";

const CommentsCard = [
  {
    recipename: "salad",
    userName: "Amanda Satya",
    userImage: photo2.src,
    comments: [
      {
        username: "Amanda Satya",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distinctio!",
        time: "5 min ago",
      },
      {
        username: "Iman Finuaz ",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distinctio!",
        time: "2 hour ago",
      },
      {
        username: "Haikal Bintang",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distinctio!",
        time: "3 hour ago",
      },
      {
        username: "Fachrezi Ramadhani",
        userImage: photo1.src,
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, distin",
        time: "4 hour ago",
      },
    ],
  },
];

export default function CommentSection() {
  return (
    <div className="px-2 mt-10">
      <div className="border-2 border-slate-700 bg-slate-100 rounded-xl p-4">
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="text-xl text-slate-800 font-bold">Comments</h1>
            <div className="flex justify-center items-center h-8 w-8 bg-slate-800 ml-2 text-white rounded-full">
              {CommentsCard[0].comments.length}
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-slate-800">
              Add comment as{" "}
              <span className="font-semibold text-slate-800">
                {CommentsCard[0].userName}:
              </span>
            </h1>
          </div>
          <form action="" method="post">
            <div className="relative mt-1">
              <textarea className="w-full h-20 border-slate-400 border-2 bg-white text-slate-800 rounded-xl text-sm" />
              <div className="absolute -top-5 -right-2">
                <picture>
                  <img
                    src={CommentsCard[0].userImage}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover shadow-md shadow-slate-800"
                  />
                </picture>
              </div>
            </div>
            <div className="flex justify-end items-center mt-2">
              <Button className="bg-red-500 hover:bg-red-600">Submit</Button>
            </div>
          </form>
        </div>
        {CommentsCard[0].comments.map((card: any) => (
          <div key={card.id} className="flex border-b-2 w-full">
            {/* <div className="hidden lg:flex justify-center items-center p-2">
              <picture>
                <img
                  src={card.userImage}
                  alt=""
                  className=" h-12 w-12 rounded-full object-cover"
                />
              </picture>
            </div> */}
            <div className="flex flex-col justify-start items-start w-full p-2">
              <div className="flex flex-col lg:px-0 bg-white rounded-xl w-full ">
                <div className="flex gap-3 p-3">
                  <div className="">
                    <picture>
                      <img
                        src={card.userImage}
                        alt=""
                        className="h-12 w-14 rounded-full object-cover"
                      />
                    </picture>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h2 className="text-slate-800 font-semibold">
                        {card.username}
                      </h2>
                    </div>
                    <div>
                      <p className="text-xs text-slate-700">{card.time}</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-sm text-slate-800">{card.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
