"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { signOut } from "next-auth/react";
import { User } from "next-auth";
import { classNames } from "@/lib/util";
import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const userNavigation = [
  { name: "Your Profile", click: () => {} },
  { name: "Settings", click: () => {} },
  {
    name: "Sign out",
    click: () => {
      signOut({ callbackUrl: "/" });
    },
  },
];

export function DesktopMenu({ user }: { user: User }) {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none ">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <Image
            alt=""
            src={user?.image || ""}
            className="h-8 w-8 rounded-full"
            width={32}
            height={32}
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {userNavigation.map((item) => (
          <MenuItem key={item.name}>
            <button
              onClick={item.click}
              className="block px-4 py-2 text-sm text-left text-gray-300 data-[focus]:bg-gray-800 w-full"
            >
              {item.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

export function MobileMenu({ user }: { user: User }) {
  return (
    <div className="border-t border-gray-200 pb-3 pt-4">
      <div className="flex items-center px-4">
        <div className="flex-shrink-0">
          <Image
            alt=""
            src={user.image || ""}
            className="h-10 w-10 rounded-full"
            width={40}
            height={40}
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-200">{user.name}</div>
          <div className="text-sm font-medium text-gray-500">{user.email}</div>
        </div>
        <button
          type="button"
          className="relative ml-auto flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-tulip-500 focus:ring-offset-2"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <BellIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-3 space-y-1">
        {userNavigation.map((item: any) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-tulip-900/20 hover:text-gray-200"
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </div>
  );
}
