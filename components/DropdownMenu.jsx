import { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="link relative">
      <button onClick={toggleMenu} className="flex items-center">
        Other
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute top-10 left-0 z-10 bg-white border border-gray-300 rounded-md shadow-md">
          <li className="py-2 px-4 hover:bg-gray-100">
            <Link href={"/articles/algorithms"}>Algorithms</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-100">
            <Link href={"/articles/concurrency"}>Concurrency</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-100">
            <Link href={"/articles/misc"}>Misc.</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;