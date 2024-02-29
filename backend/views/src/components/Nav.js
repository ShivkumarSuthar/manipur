import React from "react";
import { VscAzure } from "react-icons/vsc";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { CgOptions } from "react-icons/cg";
import { IoMdImages } from "react-icons/io";
import { FaTableColumns } from "react-icons/fa6";
function Nav() {
  return (
    <section className="h-screen w-100">
      <div>
        <div className="flex justify-start items-center pl-3 pt-3 pb-3 border-b-[1px] border-slate-200 ">
          <span>
            <VscAzure className="bg-slate-200 w-8 h-8 p-2 rounded-full" />
          </span>
          <span className="ml-2 font-Montserrat  font-medium text-slate-200">
            Manipur
          </span>
        </div>
        <div>
          <div className="flex justify-start items-center pl-3 pt-3 pb-3 border-b-[1px] border-slate-200 font-Montserrat">
            <span>
              <FaUserAstronaut className="bg-slate-200 w-8 h-8 p-2 rounded-full" />
            </span>
            <span className="ml-2 font-Montserrat  font-medium text-slate-200">
              Admin
            </span>
          </div>

          <div>
            <nav className=" pt-4">
              <ul className=" font-Montserrat font-thin text-slate-200 text-lg">
                <li className=" p-3 hover:bg-blue-600">
                  <a className="flex items-center" href="/">
                    <AiOutlineDashboard />
                    <span className=" text-base pl-1 ">Dashboard</span>
                  </a>
                </li>
                <li className=" p-3 hover:bg-blue-600 ">
                  <a href="/" className="flex items-center">
                    <IoIosPeople />
                    <span className=" text-base pl-1">Everyone</span>
                  </a>
                </li>
                <li className="  p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <IoIosPeople />
                    <span className=" text-base pl-1">Visitors</span>
                  </a>
                </li>
                <li className=" p-3 hover:bg-blue-600  ">
                  <a href="/" className="flex items-center">
                    <IoIosChatbubbles />
                    <span className=" text-base pl-1">Feedbacks</span>
                  </a>
                </li>
                <li className=" p-3 hover:bg-blue-600  ">
                  <a href="/" className="flex items-center">
                    <CgOptions />
                    <span className=" text-base pl-1">Categories</span>
                  </a>
                </li>
                <li className=" p-3 hover:bg-blue-600 ">
                  <a href="/" className="flex items-center">
                    <IoMdImages />
                    <span className=" text-base pl-1">Time Wall</span>
                  </a>
                </li>
                <li className=" p-3 hover:bg-blue-600 ">
                  <a href="/" className="flex items-center">
                    <CgOptions />
                    <span className=" text-base pl-1">Large Categories</span>
                  </a>
                </li>
                <li className=" p-3 hover:bg-blue-600 ">
                  <a href="/" className="flex items-center">
                    <FaTableColumns />
                    <span className=" text-base pl-1">Large Video Wall</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
