import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen relative p-8">
      {/* Logo at top left corner */}
      <div className="absolute top-8 left-8 z-10">
        <Image
          src="/hk_logo_black.png"
          alt="Harsh Kardile Logo"
          width={50}
          height={50}
          className="w-12 h-12 cursor-pointer"
        />
      </div>

      {/* Two boxes below the logo taking full width */}
      <div className="flex flex-row gap-6 mt-24 w-full">
        {/* Text Box - 60% width */}
        <div className="w-[60%] bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h1 className="text-7xl font-semibold text-gray-900 mb-4">
            Harsh Kardile
          </h1>
          <p className="text-gray-700 leading-relaxed">
            A passionate full-stack developer and tech enthusiast with a keen
            eye for creating innovative digital experiences. I specialize in
            modern web technologies, bringing ideas to life through clean code
            and thoughtful design. When I&apos;m not coding, you&apos;ll find me
            exploring new technologies, contributing to open-source projects, or
            sharing knowledge with the developer community.
          </p>
        </div>

        {/* Image Box - 40% width */}
        <div className="w-[40%] bg-white border border-gray-200 rounded-lg p-6 shadow-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
