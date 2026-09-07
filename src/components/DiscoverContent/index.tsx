import { Button } from "../ui/button";

import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";

export default function DiscoverContent() {
  return (
    <div>
      <div className="flex justify-center items-center px-6 pt-10 pb-4 text-xl gap-3 text-gray-700">
        <h1>&mdash;&mdash;&mdash;&mdash;&mdash;</h1>
        <h1 className="text-xl font-semibold text-gray-700">Discover</h1>
        <h1>&mdash;&mdash;&mdash;&mdash;&mdash;</h1>
      </div>
      <h1 className="flex justify-center items-center text-3xl font-bold text-gray-800">
        Our Engagement
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 p-10">
        <div className="flex-wrap flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={logo1.src} alt="" />
          </div>
          <h1 className="text-lg font-medium mt-2">Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={logo2.src} alt="" />
          </div>
          <h1 className="text-lg font-medium mt-2">Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={logo3.src} alt="" />
          </div>
          <h1 className="text-lg font-medium mt-2">Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={logo4.src} alt="" />
          </div>
          <h1 className="text-lg font-medium mt-2">Fresh and Natural</h1>
        </div>
        <div className="flex-wrap justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={logo5.src} alt="" />
          </div>
          <h1 className="text-lg font-medium mt-2">Fresh and Natural</h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button className="bg-red-500 text-xl font-bold ">Learn More</Button>
      </div>
    </div>
  );
}
