import { FiSun, FiMoon } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ClipLoader } from "react-spinners";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme("system");
    setMounted(true);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 bg-gray-900 text-gray-200 p-3 rounded-full dark:bg-gray-200 dark:text-gray-900 cursor-pointer">
      {!mounted ? (
        <ClipLoader size={20} />
      ) : resolvedTheme === "dark" ? (
        <FiSun size={15} onClick={() => setTheme("light")} />
      ) : (
        <FiMoon size={15} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default ThemeToggle;
