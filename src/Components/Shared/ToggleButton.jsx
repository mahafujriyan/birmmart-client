import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleButton = () => {
     const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme); 
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-outline rounded-full"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
   
};

export default ToggleButton;