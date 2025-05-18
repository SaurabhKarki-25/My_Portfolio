import React, { useState, useEffect } from "react";
import profileImage from "../../assets/saurabhpic.jpg";
import Tilt from "react-parallax-tilt";

export default function About() {
  const textArray = ["Web Developer", "Frontend Developer", "UI/UX Designer", "Full Stack Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setCurrentText(textArray[textIndex].slice(0, i));
      i++;

      if (i > textArray[textIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => setTextIndex((prev) => (prev + 1) % textArray.length), 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  return (
    <section id="about" className="py-4 px-[4vw] md:px-[5vw] lg:px-[16vw] font-sans mt-6 md:mt-24 lg:mt-5">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I'm
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
            Saurabh Singh Karki
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            {currentText}
            <span className="text-[#8245ec]">|</span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a passionate frontend developer with a keen eye for user experience and responsive design.
            With expertise in React.js, Tailwind CSS, and modern web technologies, I am focused on building
            impactful projects that bridge design and development.
          </p>
          <a href="https://drive.google.com/file/d/1ReRZKtd6WGcpRy_svCuIBisq32XiAimz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform"
            style={{
              background: "linear-gradient(90deg , #8245ec , #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec , 0 0 40px #8245ec",
            }}>
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
       <div className="md:w-1/2 flex justify-center md:justify-end">
     <div className="md:w-1/2 flex justify-center md:justify-end">
  <Tilt
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  glareEnable={true}
  glareMaxOpacity={0.4}
  perspective={1000}
  transitionSpeed={1000}
  gyroscope={true}
  scale = {1.15}
  className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[600px] lg:h-[350px] border-4 border-purple-700 rounded-[40px] overflow-hidden"
>
  <img
    src={profileImage}
    alt="Saurabh"
    className="w-full h-full rounded-[40px] object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
  />
</Tilt>
</div>
</div>
      </div>
    </section>
  );
}