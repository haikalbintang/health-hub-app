import Facebook from "@/components/Facebook";
import Instagram from "@/components/Instagram";
import YouTube from "@/components/YouTube";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 px-10 py-10 bg-orange-200 text-slate-800 rounded-t-xl">
      <div className="flex items-center mb-7">
        <h2 className="font-bold grid-rows-1">FOLLOW US</h2>
      </div>
      <ul className="flex items-center gap-2 pl-5 mb-5">
        <li className="pr-1">
          <YouTube />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Facebook />
        </li>
      </ul>

      <div>
        <h2 className="font-bold">CONTACT US</h2>
        <h3 className="mt-4 font-bold">Address:</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <h3 className="mt-4 font-bold">Contact:</h3>
        <p className="text-sm">+62 878 1234 5678</p>
        <h3 className="mt-4 font-bold">Email:</h3>
        <p className="text-sm">finalproject@revou.co</p>
      </div>

      <div className="gap-4 pl-5 grid-cols-2">
        <div className="">
          <h2 className="font-bold">NAVIGATE</h2>
          <ul className="font-normal">
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Products</li>
            <li className="mt-4">Locations</li>
            <li className="mt-4">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
