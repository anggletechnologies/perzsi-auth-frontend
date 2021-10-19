module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "kyc-blue": "#0d0f61",
        "primary-green": /* "#2d736e", */ /* background: */ "#3F9F98",
        "primary-verify-blue": "#0d0f61",
        "primary-blue-accent": "#f2f7fa",
        "primary-green-disabled": "#aed4d2",
        "primary-bright": "#f8f8f8",
        "primary-text": "#6e7191",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
