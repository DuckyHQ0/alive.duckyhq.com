import React, { type ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

export const ListItemCollapsible = ({
  text,
  slug,
  children,
  selected,
  defaultOpen = false,
}: {
  text: string;
  slug?: string;
  children?: ReactNode;
  selected?: boolean;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={`flex flex-col ${open ? "gap-8" : "gap-0"}`}
    >
      <div className="flex items-center justify-between">
        <a
          href={slug}
          className={`body ${selected ? "text-accent" : "text-text-1"}`}
        >
          {text}
        </a>
        <Collapsible.Trigger asChild>
          <button>
            {open ? (
              <ChevronIconDown selected={selected} />
            ) : (
              <ChevronIconUp selected={selected} />
            )}
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className="flex flex-col gap-8 pl-24">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export const ListItem = ({ text, slug, selected }) => {
  return (
    <a href={slug} className="flex justify-between">
      <p className={`body ${selected ? "text-accent" : "text-text-1"}`}>
        {text}
      </p>
    </a>
  );
};

const ChevronIconUp = ({ selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.21967 9.1933C5.51256 8.90041 5.98744 8.90041 6.28033 9.1933L10 12.913L13.7197 9.1933C14.0126 8.90041 14.4874 8.90041 14.7803 9.1933C15.0732 9.4862 15.0732 9.96107 14.7803 10.254L10.5303 14.504C10.3897 14.6446 10.1989 14.7236 10 14.7236C9.80109 14.7236 9.61032 14.6446 9.46967 14.504L5.21967 10.254C4.92678 9.96107 4.92678 9.4862 5.21967 9.1933Z"
        fill={selected ? "#0DB7FF" : "#DEDEDE"}
      />
    </svg>
  );
};

const ChevronIconDown = ({ selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7803 12.754C14.4874 13.0469 14.0126 13.0469 13.7197 12.754L10 9.03429L6.28033 12.754C5.98744 13.0469 5.51256 13.0469 5.21967 12.754C4.92678 12.4611 4.92678 11.9862 5.21967 11.6933L9.46967 7.4433C9.61032 7.30265 9.80109 7.22363 10 7.22363C10.1989 7.22363 10.3897 7.30265 10.5303 7.4433L14.7803 11.6933C15.0732 11.9862 15.0732 12.4611 14.7803 12.754Z"
        fill={selected ? "#0DB7FF" : "#DEDEDE"}
      />
    </svg>
  );
};
