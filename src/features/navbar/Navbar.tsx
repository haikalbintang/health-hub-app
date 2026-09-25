import Link from "next/link";

const Navbar = ({
  isLoggedIn,
  setIsLoginModalShown,
}: {
  isLoggedIn: boolean;
  setIsLoginModalShown: (toggle: boolean) => void;
}) => {
  return (
    <nav>
      <ul className="font-sans font-medium text-lg flex gap-40 justify-center items-center">
        <li className="pl-1">
          <Link href="/feeds">Recipes</Link>
        </li>
        <li className="px-1">
          <Link href="/users">People</Link>
        </li>
        <li className="pl-2">
          <div className="border-orange-200 border-4 p-2 pt-0 mt-2 rounded-xl">
            <Link href="/">
              <h1 className="text-emerald-700 text-2xl">Health</h1>
              <h2 className="text-white bg-gray-950 mx-auto rounded-xl text-center text-2xl font-bold px-2 pt-0 pb-1">
                HUB
              </h2>
            </Link>
          </div>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        ) : (
          <li>
            <Link
              href={"/login"}
              className="cursor-pointer bg-gray-800 text-white px-4 pt-1 pb-2 rounded-xl hover:bg-gray-900"
              // onClick={() => setIsLoginModalShown(true)}
            >
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
