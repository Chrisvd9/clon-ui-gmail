import React from "react";
import {
  RiSearchLine,
  RiQuestionLine,
  RiSettings3Line,
  RiGridFill,
} from "react-icons/ri";
import { BiAbacus } from "react-icons/bi";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 h-[8vh] text-white">
      <div className="w-full">
        <form>
          <div className="relative w-full">
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 left-1 p-3 hover:bg-gray-200/60 transition-colors rounded-full"
            >
              <RiSearchLine />
            </button>
            <input
              type="text"
              className="bg-secondary/40 py-3 px-12 outline-none w-full rounded-full"
              placeholder="Buscar en el correo electrónico"
            />
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-1 p-3 hover:bg-gray-200/60 transition-colors rounded-full"
            >
              <BiAbacus />
            </button>
          </div>
        </form>
      </div>
      <ul className="hidden w-full md:flex items-center md:justify-end gap-2">
        <li>
          <button
            type="button"
            className="text-2xl p-2 hover:bg-gray-200/60 transition-colors rounded-full"
          >
            <RiQuestionLine />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-2xl p-2 hover:bg-gray-200/60 transition-colors rounded-full"
          >
            <RiSettings3Line />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-2xl p-2 hover:bg-gray-200/60 transition-colors rounded-full"
          >
            <RiGridFill />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-xl p-2 bg-[#0288D1] text-white rounded-full hover:ring-2 hover:ring-bg-gray-200/60"
          >
            C
          </button>
        </li>
      </ul>
    </header>
  );
}
