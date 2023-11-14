"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AlertProps {
  content: string,
  loginStatus: boolean,
  children: React.ReactNode
}
const Alert = ({ content, loginStatus, children }:AlertProps) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (loginStatus) {
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loginStatus]);

  return (
    <motion.div
      initial={{ scale: 0 }} 
      animate={{ scale: showAlert ? 1 : 0 }} 
      transition={{ duration: 0.5 }} 
      className="w-full md:w-1/3 h-20 absolute top-0 right-0 bg-green-400 rounded-md text-white flex justify-center items-center"
    >
      {content}
      {children}
    </motion.div>
  );
};

export default Alert;
