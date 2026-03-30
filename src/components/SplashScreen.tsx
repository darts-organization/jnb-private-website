"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ease } from "@/lib/animations";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("jnb-splash-seen");
  });

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("jnb-splash-seen", "1");
    }, 500);
    return () => clearTimeout(timer);
  }, [show]);

  // Prevent scroll while splash is visible
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: ease.luxury }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: ease.luxury }}
            >
              <Image
                src="/images/Main.svg"
                alt="JNB Private"
                width={610}
                height={495}
                className="h-16 w-auto sm:h-20"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 0 : 1 }}
        transition={{ duration: 0.5, ease: ease.luxury }}
      >
        {children}
      </motion.div>
    </>
  );
}
