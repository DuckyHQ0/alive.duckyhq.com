"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nav() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ type: "spring", stiffness: 200, duration: 0.4, delay: 0.2 }}
      className="px-128 sticky top-48 py-16 flex max-[630px]:px-32 max-[1200px]:rounded-none max-w-[1204px] max-[1200px]:border-x-0 w-full place-self-center m-48 max-[630px]:mx-[20px] z-50 place-content-between place-items-center backdrop-blur-main bg-bg-1 border border-stroke-1 rounded-out"
    >
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          width={33}
          height={33}
          alt="DuckyHQ Logo"
          className="hover-active-effect"
        />
      </Link>
      <motion.div
        variants={item}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.4,
          damping: 15,
        }}
        className="flex gap-32 max-[630px]:gap-16"
      >
        <Link
          href={"/"}
          className="text-sub hover:text-selected active:text-selected/75 duration-150"
        >
          Home
        </Link>
        <Link
          href={"/#about"}
          className="text-sub hover:text-selected active:text-selected/75 duration-150"
        >
          About
        </Link>
        <Link
          href={"https://github.com/DuckyHQ0"}
          className="text-sub hover:text-selected active:text-selected/75 duration-150"
        >
          Twitch
        </Link>
      </motion.div>
    </motion.nav>
  );
}
