// "use client";
// import React, { useState } from "react";
// import ChefProfile from "@/features/chef-profile/ChefProfile";
// import { chefMainCard } from "@/data/index";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// // import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
// // import tiktoksvg from "../../components/images/svg/tiktok-logo-logo-svgrepo-com.svg";
// const ProfilePage: React.FC = () => {
//   const [following, setFollowing] = useState(false);
//   const [startIndex, setStartIndex] = useState(0);
//   const handleFollowToggle = () => {
//     setFollowing(!following);
//   };
//   const recipeCards = chefMainCard[0].recipe.slice(startIndex, startIndex + 2);
//   const handleNext = () => {
//     if (startIndex < chefMainCard[0].recipe.length - 2) {
//       setStartIndex((prev) => prev + 1);
//     }
//   };
//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex((prev) => prev - 1);
//     }
//   };
//   return (
//     <div className="flex lg:flex justify-center items-center overflow-hidden">
//       <div className="flex flex-col lg:flex-row justify-center items-center lg:p-16 lg:m-10 overflow-hidden">
//         <div className="flex justify-center items-center">
//           <ChefProfile className="lg:w-1/2" />
//         </div>

//         <div className="w-full lg:w-1/2 lg:h-1/2 bg-orange-100 lg:rounded-tr-3xl lg:rounded-br-3xl overflow-hidden ">
//           {chefMainCard.map((card: any, index: number) => (
//             <div key={index} className=" 2xl:p-10">
//               {chefMainCard[0].socialMedia.map((social: any, index: number) => (
//                 <div
//                   key={index}
//                   className="flex flex-col lg:flex-row justify-around gap-2"
//                 >
//                   <h1 className="flex justify-center items-center pt-6 2xl:pt-6">
//                     {card.userRole}
//                   </h1>
//                   <div className="flex justify-center items-center gap-3 pt-4 2xl:p-8">
//                     <div>
//                       <Button>
//                         <a>Following :</a>
//                         <a> {social.following}</a>
//                       </Button>
//                     </div>
//                     <div>
//                       <Button>
//                         <a>Followers :</a>
//                         <a> {social.followers}</a>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <h1 className="text-5xl pl-10 py-5">{card.name}</h1>
//               <h1 className=" pl-10  w-full">{card.description}</h1>
//               {chefMainCard[0].socialMedia.map((social: any, index: number) => (
//                 <div
//                   key={index}
//                   className="social-media pr-10 pt-6 flex justify-center lg:justify-end items center"
//                 >
//                   <div className="flex gap-2">
//                     <Button onClick={handleFollowToggle}>
//                       {following ? "Following" : "+ Follow"}
//                     </Button>
//                     <div className="flex justify-center items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         width="24"
//                         height="24"
//                         fill="none"
//                         stroke="#000000"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         // style="opacity:1;"
//                       >
//                         <path
//                           fill="none"
//                           d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
//                         />
//                       </svg>
//                     </div>
//                     <div className="flex justify-center items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 640 640"
//                         width="24"
//                         height="24"
//                         fill="#000000"
//                       >
//                         <path d="M544.5 273.9c-44 .1-87-13.6-122.8-39.2v178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6s-64.8 13.5-96.9 5.3s-60.9-25.9-82.7-50.8s-35.3-56-39-88.9s2.9-66.1 18.6-95.2s40-52.7 69.6-67.7s62.9-20.5 95.7-16v89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3s-14 28.1-13.9 43.9s5.2 31 14.5 43.7s22.4 22.1 37.4 26.9s31.1 4.8 46-.1s28-14.4 37.2-27.1s14.2-28.1 14.2-43.8V64h88c-.1 7.4.6 14.9 1.9 22.2c3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1V274z" />
//                       </svg>
//                       <a href={social.facebook}></a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex flex-col  px-10">
//                 <div>
//                   <h1 className="py-2">Recipes</h1>
//                 </div>
//                 <div className="flex gap-3">
//                   {recipeCards.map((recipe: any, index: number) => (
//                     <div key={index} className="flex flex-col h-40 w-1/2 pb-10">
//                       {/* <img
//                         src={recipe.image}
//                         alt=""
//                         className="rounded-xl object-cover h-full w-full"
//                       /> */}
//                       <div className="pt-2">
//                         <h1 className="">{recipe.recipeName}</h1>
//                         <div className="flex gap-3">
//                           <h1 className="text-md font-extralight">
//                             {recipe.tags}
//                           </h1>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex justify-center lg:justify-end pt-24 lg:pt-8 lg:pb-4 gap-3">
//                   <Button
//                     onClick={handlePrev}
//                     disabled={startIndex === 0}
//                     className="rounded-full bg-red-500 hover:bg-red-600"
//                   >
//                     {"<"}
//                   </Button>
//                   <Button
//                     onClick={handleNext}
//                     disabled={startIndex === chefMainCard[0].recipe.length - 1}
//                     className="rounded-full bg-red-500 hover:bg-red-600"
//                   >
//                     {">"}
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
