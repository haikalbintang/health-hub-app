import React, { ReactNode } from "react";

const RightArrow = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <div className="rounded-full bg-gray-200  h-8 w-8 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </div>

      <h1 className="flex flex-row text-sm sm:text-base">{children}</h1>
    </div>
  );
};

export default RightArrow;
