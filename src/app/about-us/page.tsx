import Image from "next/image";
import masIman from "@/components/images/Iman.jpg";
import masSatya from "@/components/images/Satya.jpg";
import masRezi from "@/components/images/Rezi.jpg";
import masHaikal from "@/components/images/Haikal.jpeg";

const page = () => {
  return (
    <div>
      {/* <div className=" bg-blue-200 p-4">
        <h2>Our Company</h2>
        <p>
          RevoU Foods is a company that is establish in 2024 to promoting
          healthy food around the world
        </p>
        
      </div> */}

      <div className="flex flex-col justify-center items-center gap-8 py-8 rounded-2xl">
        <h1 className="text-4xl font-extrabold text-emerald-900 pb-6">
          Our Team
        </h1>
        <div className="flex gap-8 px-8">
          <div className="w-2/5">
            <Image
              className="rounded-3xl"
              src={masIman.src}
              alt={""}
              width={800}
              height={1200}
            />
          </div>
          <div className="w-3/5 flex flex-col justify-center items-center">
            <h2 className="text-6xl font-extrabold text-indigo-900">
              Iman Finuaz
            </h2>
            <p className="text-2xl text-indigo-950 font-bold pt-4">
              Project Manager & BE
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between gap-8 px-8">
          <div className="w-3/5 flex flex-col justify-center items-center">
            <h2 className="text-6xl font-extrabold text-red-700">Rezi Rama</h2>
            <p className="text-2xl text-red-800 font-bold pt-4">
              Content & Research
            </p>
          </div>
          <div className="w-2/5">
            <Image
              className="rounded-3xl"
              src={masRezi.src}
              alt={""}
              width={800}
              height={1200}
            />
          </div>
        </div>
        <div className="flex gap-8 px-8">
          <div className="w-2/5">
            <Image
              className="rounded-3xl"
              src={masSatya.src}
              alt={""}
              width={800}
              height={1200}
            />
          </div>
          <div className="w-3/5 flex flex-col justify-center items-center">
            <h2 className="text-6xl font-extrabold text-slate-800">
              Amanda Satya
            </h2>
            <p className="text-2xl text-slate-900 font-bold pt-4">
              Team Lead & FE
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between gap-8 px-8">
          <div className="w-3/5 flex flex-col justify-center items-center">
            <h2 className="text-6xl font-extrabold text-amber-800">
              Haikal Bintang
            </h2>
            <p className="text-2xl text-amber-900 font-bold pt-4">
              FE & Design
            </p>
          </div>
          <div className="w-2/5">
            <Image
              className="rounded-3xl"
              src={masHaikal.src}
              alt={""}
              width={800}
              height={1200}
            />
          </div>
        </div>
      </div>
      <div className="bg-orange-300 p-3 my-2">
        <h2>Our Mission</h2>
        <p>
          It is not just to promote food as a culture, but to measure the
          nutrients and to change the perspective of healthy foods from boring
          to be super fun!
        </p>
      </div>
    </div>
  );
};

export default page;
