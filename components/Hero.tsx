import { BackgroundBeams } from "@/utils/BackgroundBeams";
import {
  ArrowDownward,
  GitHub,
  Instagram,
  LinkedIn,
  OpenInNew,
} from "@mui/icons-material";
import Link from "next/link";

const socials = [
  {
    link: "https://github.com/JellYouness",
    icon: <GitHub className="text-3xl" />,
  },
  {
    link: "https://www.linkedin.com/in/youness-jellouli/",
    icon: <LinkedIn className="text-3xl" />,
  },
  {
    link: "https://www.instagram.com/yns_jell/",
    icon: <Instagram className="text-3xl" />,
  },
];

const Hero = () => {
  return (
    <div className="section flex flex-col justify-center items-center gap-4 relative h-screen w-full">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
      <h1 className="text-xl font-bold">Hi, I am</h1>
      <p className="text-5xl font-bold text-primary-main">Youness JELLOULI</p>
      <p className="text-2xl w-6/12 text-center">
        and I'm a skilled web developer on a mission to turn innovative ideas
        into engaging online realities.
      </p>
      <div className="flex items-center gap-3 z-40">
        <Link href="#Projects">
          <button className="btn hover:transition delay-100">
            View Projects <ArrowDownward />
          </button>
        </Link>
        <Link href="#Projects">
          <button className="btn-bordered hover:transition delay-100">
            Open PDF Resume <OpenInNew />
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-1 dark:bg-white bg-gray-900 dark:text-gray-900 text-white rounded-full px-4 py-2">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            className="hover:scale-125 hover:transition delay-100"
          >
            {social.icon}
          </Link>
        ))}
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Hero;
