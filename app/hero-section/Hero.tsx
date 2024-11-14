import Image from "next/image";
import Link from "next/link";

// ICon
import {
  AiFillBilibili,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section
      className="relative z-10 flex items-stretch justify-center w-full h-screen bg-[url('./../public/heros.jpg')] bg-cover py-0"
      id="home"
    >
      <Image
        src="/background.png"
        alt="hero"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover left-0 top-0 bg-cover bg-center"
      />

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        {/* 连接button */}
        <div>
          <Link href="#">
            <button className="hidden lg:block sm:block md:text-[16px] rounded-full border-[#e4ded7] border-2 py-2 px-4 font-semibold text-[#e4ded7]">
              Lets Connect
            </button>
          </Link>
        </div>

        {/**icons */}
        <div className="text-[#e4ded7] flex gap-10 sm:gap-6 md:gap-8 lg:gap-8">
          <Link
            href="https://github.com/weianke"
            target="_blank"
            aria-label="View Github Website"
          >
            <p>
              <AiFillGithub size={24} />
            </p>
          </Link>
          <Link
            href="https://space.bilibili.com/25425042?spm_id_from=333.1007.0.0"
            target="_blank"
            aria-label="View Bilibili Profile"
          >
            <p>
              <AiFillBilibili size={24} />
            </p>
          </Link>
          <Link href="#" target="_blank" aria-label="View Youtube Profile">
            <p>
              <AiFillYoutube size={24} />
            </p>
          </Link>
          <Link href="#" target="_blank" aria-label="View Instagram Profile">
            <p>
              <AiFillInstagram size={24} />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
