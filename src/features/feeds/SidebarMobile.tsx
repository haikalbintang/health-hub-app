import React from "react";

const SidebarMobile = () => {
  return (
    <div>
      {" "}
      {/* {isSidebarOpen && (
        <div className="sm:hidden sm:static flex-col items-center p-5 pl-0 pt-0">
          <div className="flex flex-col justify-center items-start p-4 bg-orange-100 rounded-lg shadow-sm shadow-slate-500 gap-2 lg:gap-5">
            {sideBarCategories.map((sideBarCategory) => (
              <div
                key={sideBarCategory.name}
                className={`sideBarCategories flex w-full rounded-lg gap-3 justify-start items-center p-2 xl:p-3 cursor-pointer hover:bg-slate-200 ${
                  selectedCategory === sideBarCategory.name
                    ? "bg-slate-200 shadow-sm shadow-slate-500 font-medium text-slate-800"
                    : ""
                }`}
                onClick={() => handleCategoryClick(sideBarCategory.name)}
              >
                <img src={sideBarCategory.image} alt="" className="h-6 w-6" />
                <h2 className="text-slate-700 text-sm xl:text-base">
                  {sideBarCategory.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SidebarMobile;
