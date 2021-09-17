import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Swal from "sweetalert2";
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../statics/logo.png";
import { Link } from "react-router-dom";

const DropDownNav = [
  {
    name: "Satdevelop",
    description: "Visit my greatful blogs about IT now",
    href: "https://www.satdevelop.com",
    icon: SupportIcon,
  },
  {
    name: "IT Documentations",
    description: "Learn all about Software Engineering",
    href: "https://www.satdevelop.com/document",
    icon: BookmarkAltIcon,
  },
  {
    name: "Tools",
    description: "Best tools and extensions for you 🧑‍💻",
    href: "https://www.satdevelop.com/tools",
    icon: CalendarIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

//NAV PC_______________________________________
const NavPC = () => (
  <Popover.Group as="nav" className="hidden md:flex space-x-10">
    <Link
      to="/"
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      Demo Form
    </Link>
    <Link
      to="/docs"
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      Docs
    </Link>
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span>External</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
              <div
                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                style={{ width: "fit-content" }}
              >
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {DropDownNav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </Popover.Group>
);

//NAV MOBLIE_______________________________________
const NavMoblie = () => (
  <Transition
    as={Fragment}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel
      focus
      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src={logo} alt="Workflow" />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <Link
              to="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Demo Form
            </Link>

            <Link
              to="/docs"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Docs
            </Link>
            {DropDownNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <button
              onClick={() => notWorkYet()}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </button>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?{" "}
              <button
                onClick={() => notWorkYet()}
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
);

//FUNCTION_______________________________________
const notWorkYet = () => {
  Swal.fire({
    title: "Not work yet !",
    text: "This button is just the demo for UX/UI and have no functional",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Visit Blogs",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Wait until we proccess you", "sadevelop.com", "success");
      window.open("https://www.satdevelop.com", "_blank");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "", "error");
    }
  });
};

//RENDER_______________________________________
export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          {/*Logo*/}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img className=" w-auto sm:h-10" src={logo} alt="" />
            </Link>
          </div>

          {/*Mobile: Open Nav*/}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/*Nav PC*/}
          {NavPC()}

          {/*Button Resgiter*/}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              onClick={() => notWorkYet()}
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </button>
            <button
              onClick={() => notWorkYet()}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/*Nav Mobile*/}
      {NavMoblie()}
    </Popover>
  );
}
