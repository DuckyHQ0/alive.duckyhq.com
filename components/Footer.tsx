import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex max-[450px]:flex-col gap-32 p-64 place-content-between border border-stroke-1 rounded-out place-items-center max-[450px]:align-middle max-[450px]:place-content-center max-w-[1300px] w-full">
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
  );
}
