import Unauthorized from "@/components/401";
import { auth } from "@/lib/auth/auth";
import { classNames } from "@/lib/util";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { DesktopMenu, MobileMenu } from "./desktop-menu";

const navigation = [
  { name: "Home", href: "/app/home", current: true },
  { name: "Team", href: "#", current: false },
];

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) return <Unauthorized />;

  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-zinc-900 border-b border-tulip-400/20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    alt="Your Company"
                    src="/img/logo-slim.webp"
                    className="block h-10 w-auto lg:hidden"
                    width={420}
                    height={210}
                  />
                  <Image
                    alt="Your Company"
                    src="/img/logo-slim.webp"
                    className="hidden h-10 w-auto lg:block"
                    width={420}
                    height={210}
                  />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "border-tulip-500 text-gray-100"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-300",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="relative rounded-full  p-1 text-gray-600 hover:text-gray-500 focus:outline-none "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <DesktopMenu user={session.user} />
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-gray-500 focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item: any) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "border-tulip-500 bg-tulip-900/20 text-gray-200"
                      : "border-transparent text-gray-600 hover:border-gray-700 hover:bg-tulip-900/20 hover:text-gray-200",
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>

            <MobileMenu user={session.user} />
          </DisclosurePanel>
        </Disclosure>

        <div className="py-10">{children}</div>
      </div>
    </>
  );
}
