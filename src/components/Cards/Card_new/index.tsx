import ImageCropper from "../../Functions/ImageCropper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  key: number;
  title: string;
  nutriScore: number;
  rate: number;
  like: number;
  chef?: string;
  complexity: string;
  description: string;
  attachment: string;
}

export default function Card_new({
  key,
  title,
  nutriScore,
  rate,
  like,
  complexity,
  description,
  attachment,
}: Props) {
  return (
    <>
      <div key={key} className="w-44 h-44 relative overflow-y-hidden">
        <ImageCropper src={attachment} size={[300, 300]} />
        <div className="bg-slate-200 bg-opacity-65 absolute -bottom-2/3 hover:bottom-1 hover:duration-500 hover:ease-in-out left-1/2 -translate-x-1/2 w-11/12 h-40 p-2 rounded-xl border-4 border-solid border-white backdrop-blur-sm shadow-md shadow-slate-800">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-semibold line-clamp-2">{title}</h1>
            <div className="p-1 bg-slate-800 text-slate-100 rounded-md">
              <h2 className="text-sm font-semibold">{nutriScore}</h2>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center pr-14">
              <h2 className="text-xs flex items-center">
                <span className="text-xs">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                </span>

                <span className="items-end ml-0.5">{rate}</span>
              </h2>
              <h2 className="text-xs">
                <span className="text-xs">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: "#2adf57" }}
                  />
                </span>
                <span className="items-end ml-0.5">{like}</span>
              </h2>
            </div>
            <button className="text-xs px-1 bg-sky-700 text-slate-100 rounded-md">
              {complexity}
            </button>
            <div className="mt-1">
              <p className="text-xs line-clamp-2">{description}</p>
            </div>
            <div className="absolute bottom-0 right-0 -translate-x-9 flex justify-center items-center mt-0">
              <button className="text-sm rounded-xl px-2 py-1 bg-orange-600 hover:bg-orange-700 text-white">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
