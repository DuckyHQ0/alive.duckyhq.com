import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Viewport } from "next";
import Nav from "@/components/Nav";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alive.duckyhq.com"),
  title: "Alive",
  description: "Gaming group.",
  keywords: [
    "Alive gaming",
    "Alive smp",
    "dukc",
    "duckyhq",
    "Minecraft",
    "dukccc twitch",
    "dukc streams",
    "alive city",
    "alive textures",
  ],
  authors: [{ name: "dukc", url: "https://dukc.dev" }],
  creator: "dukc",
  publisher: "dukc",
  openGraph: {
    title: "Alive",
    description: "Gaming group.",
    url: "https://alive.duckyhq.com",
    siteName: "Alive",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-[#050505] text-white flex flex-col">
        <Nav />
        <div id="wrapper" className="overflow-x-hidden">
          <div className="flex align-middle place-content-center bg-transparent">
            <div className="max-w-[1300px] w-full flex flex-col gap-24 p-48 max-[630px]:px-[20px]">
              {children}
              <footer className="flex max-[450px]:flex-col gap-32 p-64 place-content-between border border-stroke-1 rounded-out place-items-center max-[450px]:align-middle max-[450px]:place-content-center">
                <div className="flex flex-col gap-16 max-[450px]:items-center">
                  <Link href={"/"}>
                    <Image
                      src={"/logo.svg"}
                      width={50}
                      height={50}
                      alt="DuckyHQ Logo"
                      className="hover-active-effect"
                    />
                  </Link>
                  <Link
                    href={"https://duckyhq.com"}
                    className="text-sub hover:text-selected active:text-selected/75 duration-150 max-[450px]:text-center"
                  >
                    Part of DuckyHQ
                  </Link>
                </div>
                <div className="flex flex-col gap-8 place-items-end max-[450px]:place-items-center">
                  <div className="flex gap-16">
                    <Link href={"https://www.twitch.tv/dukcccc"}>
                      <Image
                        src={"/icons/twitch.svg"}
                        alt={"youtube"}
                        width={32}
                        height={32}
                        className="hover-active-effect"
                      />
                    </Link>
                    <Link href={"https://discord.gg/JKMe8Ughe9"}>
                      <Image
                        src={"/icons/discord.svg"}
                        alt={"youtube"}
                        width={32}
                        height={32}
                        className="hover-active-effect"
                      />
                    </Link>
                  </div>
                  <Link
                    href={"https://dukc.dev"}
                    className="text-sub hover:text-selected active:text-selected/75 duration-150 max-[450px]:text-center"
                  >
                    by dukc
                  </Link>
                </div>
              </footer>
            </div>
          </div>
          <div className="w-[35rem] h-[30rem] animate-spin-slow animate-colour-change opacity-40 rounded-full blur-[400px] absolute bottom-[0%] left-[36%] -z-50"></div>
        </div>
      </body>
    </html>
  );
}
