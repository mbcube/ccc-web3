import { UserCircleIcon } from "@heroicons/react/24/outline";
import Unauthorized from "@/components/401";
import { auth } from "@/lib/auth/auth";
import { classNames } from "@/lib/util";
import LinkDiscordButton from "./link-discord";
import { getDiscordInfo } from "@/lib/repositories/firestore";
import Image from "next/image";

export default async function Profile() {
  //   const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
  //     useState(true);

  const session = await auth();
  const discordId = await getDiscordInfo(session?.user?.id || "");

  if (!session?.user) return <Unauthorized />;

  const secondaryNavigation = [
    { name: "General", href: "#", icon: UserCircleIcon, current: true },
    // { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
    // { name: "Notifications", href: "#", icon: BellIcon, current: false },
    // { name: "Plan", href: "#", icon: CubeIcon, current: false },
    // { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
    // { name: "Team members", href: "#", icon: UsersIcon, current: false },
  ];

  if (!session?.user) return <Unauthorized />;

  return (
    <section>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-100">
            Profile
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
          <h1 className="sr-only">General Settings</h1>

          <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
            <nav className="flex-none px-4 sm:px-6 lg:px-0">
              <ul
                role="list"
                className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
              >
                {secondaryNavigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50/10 text-tulip-500"
                          : "text-gray-300 hover:bg-tulip-50/10 ",
                        "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          item.current ? "text-tulip-400" : "text-gray-400 ",
                          "h-6 w-6 shrink-0"
                        )}
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
            <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
              <div>
                <h2 className="text-base font-semibold leading-7 text-tulip-500">
                  Profile
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-300 sm:w-64 sm:flex-none sm:pr-6">
                      Name
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-400">{session.user.name}</div>
                      {/* <button
                        type="button"
                        className="font-semibold text-tulip-600 hover:text-tulip-500"
                      >
                        Update
                      </button> */}
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-300 sm:w-64 sm:flex-none sm:pr-6">
                      Email address
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-400">{session.user.email}</div>
                      {/* <button
                        type="button"
                        className="font-semibold text-tulip-600 hover:text-tulip-500"
                      >
                        Update
                      </button> */}
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-100 sm:w-64 flex items-center sm:flex-none sm:pr-6">
                      Discord Account
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-400">
                        {discordId?.discordName ? (
                          <div className="flex items-center gap-2">
                            <Image
                              src={`https://cdn.discordapp.com/avatars/${discordId.providerAccountId}/${discordId.discordAvatar}.png`}
                              alt="Discord Avatar"
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <span>{discordId.discordName}</span>
                          </div>
                        ) : (
                          <LinkDiscordButton />
                        )}
                      </div>
                      {/* {JSON.stringify(discordId)} */}
                      {/* <button
                        type="button"
                        className="font-semibold text-tulip-600 hover:text-tulip-500"
                      >
                        Update
                      </button> */}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </main>
        </div>
      </main>
    </section>
  );
}
