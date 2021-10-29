import Image from "next/image";

import React, { useEffect, useState } from "react";

import { useMotionValue, useTransform, motion } from "framer-motion";
import useWindowDimensions from "../components/useWindowDimensions";
import ThisHead from "../components/head";
import OpenModals from "../components/modals";

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [openModals, setOpenModals] = useState(false);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, height], [45, -45]);
  const rotateY = useTransform(x, [0, width], [-45, 45]);

  const handleMouse = (event) => {
    x.set(event.pageX);
    y.set(event.pageY);
  };

  useEffect(() => {
    if (width < 800) {
      setOpenModals(true);
    } else {
      setOpenModals(false);
    }
  }, [width]);

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center 
      bg-gradient-to-r from-pink-900 via-red-500 to-pink-500"
      style={{
        perspective: width,
      }}
      onMouseMove={handleMouse}
    >
      <ThisHead />
      {openModals ? <OpenModals /> : ""}
      <h1 className="absolute text-center text-4xl top-10 text-white font-extrabold">
        Maleek Is Watching You!!
      </h1>
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        className="w-80 h-80 bg-black text-indigo-50 shadow-2xl"
      >
        <Image src="/maleek.webp" alt="maleek" layout="fill" />
      </motion.div>
    </div>
  );
};

export default Home;
