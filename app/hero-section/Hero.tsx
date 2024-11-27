import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillBilibili,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import profile from "../../public/about-me.webp";
import AnimatedWords from "../animations/AnimatedWords";
import { bodyAnimation, imageAnimation } from "../animations/animations";
import { monaSans } from "../fonts/monaSans";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex items-stretch justify-center w-full h-screen bg-[url('./../public/heros.jpg')] bg-cover py-0"
      id="home"
      initial="initial"
      animate="animate"
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
            <motion.button
              className="hidden lg:block sm:block md:text-[16px] rounded-full border-[#e4ded7] border-2 py-2 px-4 font-semibold text-[#e4ded7]"
              variants={bodyAnimation}
            >
              Lets Connect
            </motion.button>
          </Link>
        </div>

        {/**icons */}
        <div className="text-[#e4ded7] flex gap-10 sm:gap-6 md:gap-8 lg:gap-8">
          <Link
            href="https://github.com/weianke"
            target="_blank"
            aria-label="View Github Website"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillGithub size={24} />
            </motion.p>
          </Link>
          <Link
            href="https://space.bilibili.com/25425042?spm_id_from=333.1007.0.0"
            target="_blank"
            aria-label="View Bilibili Profile"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillBilibili size={24} />
            </motion.p>
          </Link>
          <Link href="#" target="_blank" aria-label="View Youtube Profile">
            <motion.p variants={bodyAnimation}>
              <AiFillYoutube size={24} />
            </motion.p>
          </Link>
          <Link href="#" target="_blank" aria-label="View Instagram Profile">
            <motion.p variants={bodyAnimation}>
              <AiFillInstagram size={24} />
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="Narirobi Anke"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-190px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="profile"
              data-blobity-tooltip="Narirobi Anke"
              data-blobity-invert="false"
              className="w-[150px] grayscale hover:grayscale-0 md:w-[200px] rounded-full lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Creative Developer, Web Designer, Freelancer, Frontend Developer.
          </p>
        </motion.div>

        <motion.div
          className="max-w-[350px] hidden lg:block lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            With 20 years of experience as a professional a grahpic designer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
