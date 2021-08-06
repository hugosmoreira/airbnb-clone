import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center cursor-pointer h-10 my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div>
        <input type="text" placeholder="Start your Search" />
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#FD5B61] hover:bg-red-500 rounded-full text-white p-2 cursor-pointer md:mx-2" />
      </div>
    </header>
  );
}

export default Header;
