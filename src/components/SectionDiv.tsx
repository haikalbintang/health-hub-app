import React, { ReactNode } from "react";

const SectionDiv = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="flex justify-center items-center px-6 pt-10 pb-4 text-xl gap-3 text-gray-700">
      <span>&mdash;&mdash;&mdash;&mdash;&mdash;</span>

      <span className="text-xl font-semibold text-gray-700 flex justify-center items-center text-center">
        {children}
      </span>
      <span>&mdash;&mdash;&mdash;&mdash;&mdash;</span>
    </h2>
  );
};

export default SectionDiv;
