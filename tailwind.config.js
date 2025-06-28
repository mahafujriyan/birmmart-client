// tailwind.config.js
export const darkMode = 'class';
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}", 
];
export const plugins = [require("daisyui")];
export const daisyui = {
    themes: ["light", "dark"], 
};
