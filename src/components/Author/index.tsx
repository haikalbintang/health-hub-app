import { chefMainCard } from "@/data";

import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
import tiktoksvg from "../../components/images/svg/tiktok-logo-logo-svgrepo-com.svg";
import instagramsvg from "../../components/images/svg/instagram2.svg";
import { Button } from "../ui/button";
import useFetchProfile from "@/hooks/useFetchProfile";

export default function Author() {
  const { profile, error, refetchProfile } = useFetchProfile();
  return (
    <div className="border-4 bg-slate-300 border-slate-400 p-4 mt-5 sm:mt-7 lg:mt-5 mx-1 rounded-xl md:w-1/2">
      <div className="flex justify-start items-center">
        <div className="justify-center items-center w-full">
          <div className="flex justify-center w-full items-center gap-2 sm:gap-4">
            <picture className="w-max">
              <img
                src={profile?.image}
                alt=""
                className=" h-16 w-20 rounded-full object-cover"
              />
            </picture>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between gap-4 md:gap-3">
                <h1 className="text-xl font-bold text-orange-900">
                  {profile?.first_name}
                </h1>
              </div>
              {chefMainCard[0].socialMedia.map((social: any) => (
                <div
                  className="flex justify-between items-center"
                  key={social.id}
                >
                  <div className="flex justify-start items-center gap-3">
                    <a href={social.facebook}>
                      <picture>
                        <img
                          src={facebooksvg.src}
                          alt=""
                          className="w-8 h-8 rounded-lg"
                        />
                      </picture>
                    </a>
                    <a href={social.tiktok}>
                      <picture>
                        <img
                          src={tiktoksvg.src}
                          alt=""
                          className="w-8 h-8 rounded-lg"
                        />
                      </picture>
                    </a>
                    <a href={social.instagram}>
                      <picture>
                        <img
                          src={instagramsvg.src}
                          alt=""
                          className="w-9 h-9 rounded-lg"
                        />
                      </picture>
                    </a>
                  </div>
                  <Button className="bg-slate-800 px-2 hover:bg-slate-900">
                    + Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
