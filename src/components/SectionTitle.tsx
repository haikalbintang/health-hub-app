import React, { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="flex justify-center items-center text-3xl font-bold text-gray-800">
      {children}
    </h1>
  );
};

export default SectionTitle;
