import localFont from "next/font/local";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import Link from "next/link";

const hanson = localFont({
  src: "./hanson.woff2",
  display: "swap",
});

function getNextStreamDates() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  // Calculate the next Sunday and Thursday
  let nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
  nextSunday.setHours(14, 0, 0, 0); // Set to  2:00 PM

  let nextThursday = new Date(now);
  nextThursday.setDate(now.getDate() + ((4 - now.getDay()) % 7));
  nextThursday.setHours(16, 0, 0, 0); // Set to  4:00 PM

  // Format the dates
  const sundayFormat = new Intl.DateTimeFormat("en-GB", options).format(
    nextSunday
  );
  const thursdayFormat = new Intl.DateTimeFormat("en-GB", options).format(
    nextThursday
  );

  return { sunday: sundayFormat, thursday: thursdayFormat };
}

export default function Home() {
  const projectMetadata = getProjectMetadata();
  const projectPreviews = projectMetadata.map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));

  const { sunday, thursday } = getNextStreamDates();
  return (
    <>
      <div className="flex flex-col max-w-[1300px] w-full py-[200px] gap-24">
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`${hanson.className} text-[86px] max-[670px]:text-1 max-[450px]:text-2 leading-none`}
          >
            Alive
          </h1>
          <p className="text-body">Gaming</p>
        </div>
        <div className="flex flex-wrap gap-24 justify-center items-center">
          <PrimaryButton text="Projects" type="primary" link="#projects" />
          <SecondaryButton
            text="GitHub"
            type="secondary"
            link="https://github.com/DuckyHQ0"
          />
        </div>
      </div>
      <div
        className="border border-stroke-1 rounded-out max-w-[1300px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24"
        id="projects"
      >
        <h2 className="text-2 font-medium">Projects</h2>
        <div className="grid grid-cols-2 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
          {projectPreviews}
        </div>
      </div>
      <div
        className="border border-stroke-1 rounded-out max-w-[1300px] w-full flex max-[880px]:flex-col overflow-clip"
        id="about"
      >
        <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
          <h2 className="text-2 font-medium">About</h2>
          <p className="text-body leading-[220%]">
            Alive Gaming is a group based on creating innovative and amazing
            experiences / resources in video games. <br />
            Our focus is currently on Minecraft.
          </p>
        </div>
        <Image
          src={"/screenshots/mc1.png"}
          alt={""}
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div
        className="border border-stroke-1 rounded-out max-w-[1300px] w-full flex max-[880px]:flex-col overflow-clip"
        id="streams"
      >
        <Image
          src={"/screenshots/mc2.png"}
          alt={""}
          width={1000}
          height={1000}
          className="w-full h-full"
        />
        <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit items-end">
          <h2 className="text-2 font-medium text-right">Live Streams</h2>
          <p className="text-body text-right leading-[220%]">
            dukc streams every {sunday} and {thursday} on Twitch. <br />
            The vods, and clips are uploaded to YouTube. <br />
            The dates are local to your timezone. Current game: Valheim
          </p>

          <div className="flex flex-wrap gap-12">
            <Link
              href={"https://www.twitch.tv/dukcccc"}
              className="bg-purple/75 border-stroke-2 text-white hover:bg-purple active:bg-purple/50 disabled:bg-purple/25
        text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
        hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
            >
              Twitch
            </Link>
            <Link
              href={"https://www.youtube.com/@dukclive"}
              className="bg-red/75 border-stroke-2 text-white hover:bg-red active:bg-red/50 disabled:bg-red/25
        text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
        hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div
        className="border border-stroke-1 rounded-out max-w-[1300px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24"
        id="downloads"
      >
        <h2 className="text-2 font-medium">Downloads</h2>
        <p className="text-body">Coming soon!</p>
      </div>
    </>
  );
}
