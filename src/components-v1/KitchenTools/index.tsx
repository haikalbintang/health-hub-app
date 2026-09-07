import React from "react";
import { chefMainCard } from "@/data";
export default function kitchenTools() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="text-xl items-center">Kitchen Tools :</h1>
        </div>
        <div className="lg:flex justify-center items-center gap-5">
          {chefMainCard[0].kitchenTools.map((tool: any, index: number) => (
            <div
              key={index}
              className="bg-slate-200 p-5 gap-2 rounded-xl w-full shadow-lg shadow-slate-500 "
            >
              <div className="flex justify-center items-center">
                <img
                  src={tool.toolsImage}
                  alt=""
                  className="h-12 w-12 object-cover"
                />
                <h1>{tool.toolsName}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
