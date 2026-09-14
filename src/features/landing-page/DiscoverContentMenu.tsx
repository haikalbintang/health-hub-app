import { discoverContentMenus } from "@/data/data";
import Image from "next/image";
import React from "react";

const DiscoverContentMenu = ({
  menu,
}: {
  menu: (typeof discoverContentMenus)[0];
}) => {
  const { logo, title } = menu;
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <Image height={80} width={80} src={logo} alt={title} />
      <h1 className="text-lg font-medium mt-2">{title}</h1>
    </div>
  );
};

export default DiscoverContentMenu;
