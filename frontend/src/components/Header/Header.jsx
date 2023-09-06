"use client";
import React, { useState } from "react";
import img from "../../assets/images/sode.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="py-3 md:py-0 md:h-[80px] leading-[80px] flex items-center sticky top-0 z-10 bg-[#fff]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===========logo start=========== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] md:py bg-primaryColor text-white text-[15px] font-[500] rounded-full flex items-center justify-center"></span>
            <div className="w-36 md:w-56">
              <img src={img} alt="Sode" />
            </div>
          </div>
          {/* =============logo end============= */}

          {/* =============menu start============= */}

          <div onClick={() => setOpen(!open)} className="menu lg:block md:pr-6">
            <ul
              className={`md:flex md:items-center gap-9 md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in cursor-pointer ${open ? "top-[6rem]" : "top-[-490px]"
                }`}
            >
              <li
                onMouseOver={() => {
                  setDropdown(true);
                }}
                onMouseLeave={() => {
                  setDropdown(false);
                }}
              >
                <a
                  className="font-[600] text-[15px] flex items-center gap-0 "
                  to="/apply"
                >
                  Apply{" "}
                  <span className="text-[20px]">
                    <IoMdArrowDropdown />
                  </span>
                </a>
              </li>

              {/* =======================dropset================ */}
              {dropdown && (
                <div
                  onMouseOver={() => {
                    setDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setDropdown(false);
                  }}
                  s
                  className="absolute top-14 py-3 rounded-md shadow-2xl  px-5 w-48 bg-[#ffffff] text-[14px] leading-5 z-10"
                >
                  <ul>
                    <a to="/online">
                      <li className="text-gray-600 py-1 hover:text-[#0970b8]">
                        Online/Distance Degree
                      </li>
                    </a>
                    <a to="/migration">
                      <li className="text-gray-600 py-1 hover:text-[#0970b8]">
                        Migration Certificate
                      </li>
                    </a>
                    <a to="/others">
                      <li className="text-gray-600 py-1 hover:text-[#0970b8]">
                        Other
                      </li>
                    </a>
                  </ul>
                </div>
              )}
              {/* =======================dropset================ */}

              <li>
                <a className="font-[600] text-[15px]" to="/">
                  Home
                </a>
              </li>

              <li>
                <a className="font-[600] text-[15px]" to="/support">
                  Support
                </a>
              </li>
            </ul>
          </div>
          {/* =============mobile menu============= */}

          <div
            onClick={() => setOpen(!open)}
            className="text-lg absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
