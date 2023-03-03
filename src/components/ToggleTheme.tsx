import { useState, useEffect } from 'react';

export const ToggleTheme = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  }

  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleThemeToggle = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className={`rounded-full w-12 h-6 bg-gray-300 dark:bg-red focus:outline-none p-1 ${
        currentTheme === 'dark' ? 'bg-blue-500' : ''
      }`}
      onClick={handleThemeToggle}
    >
      <span
        className={`block rounded-full w-4 h-4 bg-white shadow-md transform transition-transform ${
          currentTheme === 'dark' ? 'translate-x-6' : ''
        }`}
      ></span>
      {/* <h1 className='text-white'>current theme = {currentTheme}</h1> */}
    </button>
  );
};
