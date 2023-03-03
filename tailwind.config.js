/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ft-light": ["Figtree_300Light"],
        "ft-i-light": ["Figtree_300Light_Italic"],
        "ft-reg": ["Figtree_400Regular"],
        "ft-i-reg": ["Figtree_400Regular_Italic"],
        "ft-med": ["Figtree_500Medium_Italic"],
        "ft-i-med": ["Figtree_500Medium"],
        "ft-semibold": ["Figtree_600SemiBold"],
        "ft-i-semibold": ["Figtree_600SemiBold_Italic"],
        "ft-bold": ["Figtree_700Bold"],
        "ft-i-bold": ["Figtree_700Bold_Italic"],
        "ft-extrabold": ["Figtree_800ExtraBold"],
        "ft-i-extrabold": ["Figtree_800ExtraBold_Italic"],
        "ft-black": ["Figtree_900Black"],
        "ft-i-black": ["Figtree_900Black_Italic"],
      },
      fontWeight: {
        light: "Figtree_300Light",
        normal: "Figtree_400Regular",
        medium: "Figtree_500Medium",
        semibold: "Figtree_600SemiBold",
        bold: "Figtree_700Bold",
        extrabold: "Figtree_700Bold",
        black: "Figtree_900Black",
      },
    },
  },
  plugins: [],
};
