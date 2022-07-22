module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "grid-cols-1",
      "grid-cols-2",
      "grid-cols-3",
      "grid-cols-4",
      "grid-cols-5",
      "grid-cols-6",
      "gap-1",
      "gap-2",
      "gap-3",
      "gap-4",
      "gap-5",
      "gap-6",
      "gap-7",
      "gap-8",
      "col-span-1",
      "col-span-2",
      "col-span-3",
    ],
  },
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.25)',
        'dark-rgba': 'rgba(0, 0, 0, 0)',
        'very-dark-rgba': 'rgba(0, 0, 0, 0.6)',
      },
    },
    display: ["group-hover"],
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      brand: ['Beau Rivage', 'Poppins', 'cursive']
    }
  },
}
