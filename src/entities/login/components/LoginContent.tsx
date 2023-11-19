import React from "react";
import Image from "next/image";
import loginSVG from "../../../../public/assets/Saly-1.svg";
import { titles } from "@/ui/fonts";
import { subtitles } from "@/ui/fonts";
import { complementary } from "@/ui/fonts";
const LoginContent = () => {
  return (
    <div className="flex">
      <section>
        <h2 className={`${titles.className} text-white text-4xl`}>
          Sign Up to
        </h2>{" "}
        <h2 className={`${subtitles.className} text-white text-xl`}>
          The best application when it comes to{" "}
          <span className={`${titles.className} text-red-800   font-bold`}>
            booking flights
          </span>
        </h2>{" "}
        <div className="w-96 my-5 flex justify-center items-center">
          <p
            className={`${complementary.className} whitespace-normal text-white text-xl`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </section>
      <section>
        <Image src={loginSVG} alt="" width={500} height={500} />
      </section>
    </div>
  );
};

export default LoginContent;
