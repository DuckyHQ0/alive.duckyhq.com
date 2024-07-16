import { ListItem, ListItemCollapsible } from "./ListItem";
import { useState } from "react";

function findChildren(items, parentSlug) {
  return items.filter((item) => {
    return parentSlug === item.slug.split("/").slice(0, -1).join("/");
  });
}

function renderItems(items, parentSlug, currentSlug, isSidebarOpen) {
  const children = findChildren(items, parentSlug);

  return (
    <ul
      className={`flex flex-col gap-8 ${
        isSidebarOpen ? "max-[830px]:flex" : "max-[830px]:hidden"
      }`}
    >
      {children.map((item) => {
        const isDescendant = currentSlug.startsWith(`/docs/${item.slug}`);

        const isSelected = `/docs/${item.slug}` === currentSlug;
        const isOpen = isSelected || isDescendant;

        return (
          <li key={item.slug}>
            {item.data.directory ? (
              <ListItemCollapsible
                text={item.data.title}
                slug={`/docs/${item.slug}`}
                defaultOpen={isOpen}
                selected={isSelected}
              >
                {renderItems(items, item.slug, currentSlug, isSidebarOpen)}
              </ListItemCollapsible>
            ) : (
              <ListItem
                selected={isSelected}
                text={item.data.title}
                slug={`/docs/${item.slug}`}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({ currentSlug, docs }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={`p-24 flex flex-col gap-12 bg-fg-1 min-[830px]:w-[360px] ${
        isSidebarOpen
          ? "max-[830px]:w-[90vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-[830px]:p-16"
          : "max-[830px]:w-fit max-[830px]:p-4"
      } max-[830px]:justify-center max-[830px]:p-16 border border-stroke-1 rounded-out backdrop-blur-fg-1`}
    >
      <div
        className={`w-full flex justify-between ${
          isSidebarOpen ? "flex" : "max-[830px]:hidden"
        }`}
      >
        <h3 className="h3">Contents</h3>
        <button
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className={`min-[830px]:hidden flex flex-col gap-48 w-fit h-fit cursor-pointer`}
        >
          {isSidebarOpen ? <XIcon /> : <Bars3Icon />}
        </button>
      </div>
      {renderItems(docs, "", currentSlug, isSidebarOpen)}
      <button
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
        className={`min-[830px]:hidden ${
          isSidebarOpen ? "hidden" : ""
        } flex flex-col gap-48 w-fit h-fit cursor-pointer`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-24 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <p className="body -rotate-90 w-[22px]">Contents</p>
      </button>
    </div>
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
