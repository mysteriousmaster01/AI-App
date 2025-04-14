"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-6 w-full bg-gray-50 shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1176px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 self-center ml-5 max-w-full w-[696px]">
          <div className="flex flex-col items-start self-end mt-56 text-sm whitespace-nowrap text-zinc-700 max-md:mt-10">
            <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">
              Product
            </h3>
            <a
              href="#features"
              className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
            >
              Pricing
            </a>
          </div>
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[72%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center w-full text-sm font-bold max-md:mt-7">
                  <div className="flex gap-3 max-w-full text-3xl whitespace-nowrap text-zinc-900 w-[278px]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6859b224bdb9b5f88e0d270f7092660e7b9b922?placeholderIfAbsent=true&apiKey=a5bfb2bd0ab646dfb2be07f295d8ab28"
                      alt="SalonConnect Logo"
                      className="object-contain shrink-0 w-12 rounded-md aspect-square"
                    />
                    <h2 className="grow shrink w-52 rotate-[2.4492937051703357e-16rad]">
                      SalonConnect
                    </h2>
                  </div>
                  <h3 className="mt-12 text-xl text-center rotate-[2.4492937051703357e-16rad] text-zinc-700 max-md:mt-10">
                    Subscribe to our newsletter
                  </h3>
                  <div className="flex gap-px self-stretch mt-2 leading-loose">
                    <div className="flex flex-auto gap-1.5 self-start px-3 py-2 bg-gray-200 rounded-md border border-solid border-black border-opacity-0 text-neutral-300">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c182f271da4aedaa29af9cbd02783427adb91180?placeholderIfAbsent=true&apiKey=a5bfb2bd0ab646dfb2be07f295d8ab28"
                        alt="Email"
                        className="object-contain shrink-0 my-auto w-4 aspect-square"
                      />
                      <input
                        type="email"
                        placeholder="Input your email"
                        className="basis-auto bg-transparent outline-none"
                      />
                    </div>
                    <button className="overflow-hidden px-6 py-2 text-white whitespace-nowrap bg-indigo-500 rounded-none border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] max-md:px-5">
                      Subscribe
                    </button>
                  </div>
                  <div className="flex gap-10 mt-12 max-w-full text-zinc-700 w-[273px] max-md:mt-10">
                    <div className="flex flex-col flex-1 items-start">
                      <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">
                        Resources
                      </h3>
                      <a
                        href="#blog"
                        className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                      >
                        Blog
                      </a>
                      <a
                        href="#guides"
                        className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                      >
                        User guides
                      </a>
                      <a
                        href="#webinars"
                        className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                      >
                        Webinars
                      </a>
                    </div>
                    <div className="flex flex-col flex-1 items-start self-start">
                      <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">
                        Company
                      </h3>
                      <a
                        href="#about"
                        className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                      >
                        About us
                      </a>
                      <a
                        href="#contact"
                        className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start mt-56 text-sm text-zinc-700 max-md:mt-10">
                  <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">
                    Plans & Pricing
                  </h3>
                  <a
                    href="#personal"
                    className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                  >
                    Personal
                  </a>
                  <a
                    href="#startup"
                    className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                  >
                    Start up
                  </a>
                  <a
                    href="#organization"
                    className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]"
                  >
                    Organization
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 self-stretch px-3 py-2 text-sm leading-loose whitespace-nowrap bg-gray-200 rounded-md border border-solid border-black border-opacity-0 text-zinc-900">
            <span>English</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e357486959dbc9c63c3c2007fb5be72064da49f?placeholderIfAbsent=true&apiKey=a5bfb2bd0ab646dfb2be07f295d8ab28"
              alt="Language dropdown"
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
          </div>
          <div className="flex gap-1.5 self-stretch my-auto text-sm leading-loose text-gray-700">
            <p className="grow rotate-[2.4492937051703357e-16rad]">
              © 2024 Brand, Inc.
            </p>
            <span className="my-auto text-xs leading-loose rotate-[2.4492937051703357e-16rad]">
              •
            </span>
            <a href="#privacy" className="rotate-[2.4492937051703357e-16rad]">
              Privacy
            </a>
            <span className="my-auto text-xs leading-loose rotate-[2.4492937051703357e-16rad]">
              •
            </span>
            <a href="#terms" className="rotate-[2.4492937051703357e-16rad]">
              Terms
            </a>
            <span className="my-auto text-xs leading-loose rotate-[2.4492937051703357e-16rad]">
              •
            </span>
            <a href="#sitemap" className="rotate-[2.4492937051703357e-16rad]">
              Sitemap
            </a>
          </div>
          <div className="flex gap-4 self-stretch my-auto">
            <a href="#facebook">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5bd06a4995e7ce12bfc405eb59b71830148c20f?placeholderIfAbsent=true&apiKey=a5bfb2bd0ab646dfb2be07f295d8ab28"
                alt="Facebook"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
            <a href="#twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6737e5d99acaa29fc345922129c4b19976a6cc2?placeholderIfAbsent=true&apiKey=a5bfb2bd0ab646dfb2be07f295d8ab28"
                alt="Twitter"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
            <a href="#instagram">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4a0ce2c58e7e39a3a6d17b79b17ae4c1cbd465?placeholderIfAbsent=true&apiKey=a5bfb2bd0ab646dfb2be07f295d8ab28"
                alt="Instagram"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
            <a href="#linkedin">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c963221ecb4bf39f461ef44019e2d0bbe4382ac0?placeholderIfAbsent=true&apiKey=a5bfb2bd0ab646dfb2be07f295d8ab28"
                alt="LinkedIn"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
