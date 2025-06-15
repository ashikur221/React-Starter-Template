import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

const Layout = () => {
  const { scrollY, scrollYProgress } = useScroll();

  // ✅ Log scrollYProgress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollYProgress:", latest);
  });

  return (
    <>
      
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
