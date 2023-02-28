import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = (
    <>
      <li>Explore</li>
      <li>Collection</li>
      <li>Comunity</li>
    </>
  );
  return (
    <div className="p-5">
      <div className="flex justify-between items-center xl:w-3/5 2xl:w-1/2 container m-auto relative">
        <p className="font-medium">
          <span className="text-indigo-500">Image</span>Stock
        </p>
        <ul className="hidden lg:flex gap-10">{menu}</ul>
        {openMenu && (
          <ul className="bg-white lg:hidden p-5 border rounded-md absolute z-50 w-full top-10 left-0 flex flex-col gap-3">
            {menu}
          </ul>
        )}
        <button onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
          {openMenu ? (
            <IoClose className="text-2xl"></IoClose>
          ) : (
            <HiMenu className="text-2xl"></HiMenu>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
