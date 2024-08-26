"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FONT_MAJOR_MONO, FONT_ORBITRON } from "@/fonts/fonts";

const navigation = [
  { name: "seRVices", href: "services" },
  { name: "AffiLiATions", href: "affiliations" },
  { name: "TeaM", href: "team" },
  { name: "HiGHLiGHTs", href: "highlights" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <header className="absolute w-screen lg:bg-transparent bg-black/40">
      <nav
        aria-label="Global"
        className={`${FONT_MAJOR_MONO.className}  mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8`}
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 z-10"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-tulip-400" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrolltoHash(item.href)}
              className="text-xl cursor-pointer leading-6 text-tulip-400 z-10"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 transition duration-250 ease-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-tulip-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y text-tulip-400">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => scrolltoHash(item.href), 250);
                    }}
                    className={`${FONT_MAJOR_MONO.className} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-tulip-400 hover:bg-tulip-800`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
