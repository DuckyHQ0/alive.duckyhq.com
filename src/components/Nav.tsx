import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Alive City", link: "/alive-city" },
    { text: "Wiki", link: "/wiki" },
    { text: "Blog", link: "/blog" },
  ];
  return (
    <nav className="sticky top-24 max-[800px]:top-12 z-50 max-w-[1000px] w-full flex flex-col gap-12 h-[66px]">
      <div className="w-full justify-between backdrop-blur-fg-1 flex py-16 px-64 max-[480px]:px-24 items-center rounded-out border border-stroke-1 bg-fg-1">
        <a href="/" className="hover-effect-scale">
          <img src="/logo.svg" alt="Alive Logo" className="size-32" />
        </a>
        <div className="flex gap-32 max-[480px]:hidden">
          {navItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="subtext hover-effect-colour"
            >
              {item.text}
            </a>
          ))}
        </div>
        <button
          onClick={() => {
            toggleIsOpen();
          }}
          className="min-[480px]:hidden"
        >
          {isOpen ? <XIcon /> : <Bars3Icon />}
        </button>
      </div>
      {isOpen ? (
        <div className="w-full justify-center backdrop-blur-fg-1 flex flex-col gap-48 p-48 items-center rounded-out border border-stroke-1 bg-fg-1">
          {navItems.map((item, index) => (
            <a href={item.link} key={index} className="h3 hover-effect-colour">
              {item.text}
            </a>
          ))}
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </nav>
  );
}

const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

const Bars3Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
