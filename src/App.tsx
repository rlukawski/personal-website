import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import type React from "react";
import { useEffect, useState } from "react";
import { Home, Experience, About } from "./components";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

type User = {
  name: string;
  email: string;
  imageUrl: string;
};

type NavItem = {
  name: string;
  href: string;
};

type UserNavItem = {
  name: string;
  href: string;
};

const user: User = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
const userNavigation: UserNavItem[] = [
  { name: "Your profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example(): React.ReactElement {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== "undefined" && window.location.hash
      ? window.location.hash
      : "#home"
  );

  useEffect(() => {
    const handler = () => {
      setCurrentHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Observe sections and update currentHash on manual scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = navigation.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    let activeId = (window.location.hash || "").replace("#", "");

    const updateUrlHash = (newId: string) => {
      if (!newId) return;
      if (activeId === newId) return;
      activeId = newId;
      const newHash = `#${newId}`;
      setCurrentHash(newHash);
      // Avoid triggering native hashchange scroll/jump
      if (window.location.hash !== newHash) {
        history.replaceState(null, "", newHash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Determine the most prominently visible section
        let bestEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!bestEntry) {
            bestEntry = entry;
            continue;
          }
          if (entry.isIntersecting && !bestEntry.isIntersecting) {
            bestEntry = entry;
            continue;
          }
          if (entry.isIntersecting && bestEntry.isIntersecting) {
            if (entry.intersectionRatio > bestEntry.intersectionRatio) {
              bestEntry = entry;
            } else if (entry.intersectionRatio === bestEntry.intersectionRatio) {
              // Fallback to which is closer to the top
              if (entry.boundingClientRect.top < bestEntry.boundingClientRect.top) {
                bestEntry = entry;
              }
            }
          }
        }
        if (bestEntry && (bestEntry.isIntersecting || bestEntry.intersectionRatio > 0)) {
          updateUrlHash((bestEntry.target as HTMLElement).id);
        }
      },
      {
        // Account for sticky nav and prefer the section near the top
        root: null,
        rootMargin: "0px 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Ensure Home becomes active when at top of the page
    const onScrollTopCheck = () => {
      if (window.scrollY <= 2) {
        const homeEl = document.getElementById("home");
        if (homeEl) updateUrlHash("home");
      }
    };
    window.addEventListener("scroll", onScrollTopCheck, { passive: true });

    // Initial sync on mount in case we're in the middle of a section
    const initial = sections
      .map((el) => ({ el, top: Math.abs(el.getBoundingClientRect().top) }))
      .sort((a, b) => a.top - b.top)[0];
    if (initial) updateUrlHash(initial.el.id);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollTopCheck);
    };
  }, []);

  const smoothScrollTo = (hash: string) => (event: React.MouseEvent) => {
    // Prevent default jump, then smoothly scroll to the section.
    event.preventDefault();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    // Let the IntersectionObserver update the hash while we scroll.
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-900 p-0 md:p-4">
      <Disclosure as="nav" className="backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-center grow">
              <div className="hidden md:block p-2 bg-gray-700 rounded-xl">
                <div className="mx-10 flex items-baseline space-x-4">
                  {navigation.map((item) => {
                    const isCurrent = item.href === currentHash || (!currentHash && item.href === "#dashboard");
                    return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={smoothScrollTo(item.href)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={classNames(
                        isCurrent
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navigation.map((item) => {
              const isCurrent = item.href === currentHash || (!currentHash && item.href === "#dashboard");
              return (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={smoothScrollTo(item.href)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={classNames(
                    isCurrent
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
          </div>
          <div className="border-t border-white/10 pt-4 pb-3">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                />
              </div>
              <div className="ml-3">
                <div className="text-base/5 font-medium text-white">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-400">
                  {user.email}
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                {/* <BellIcon aria-hidden="true" className="size-6" /> */}
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
