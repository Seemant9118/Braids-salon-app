/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e9b494",
        btnColor:"#9db29f"
      },
      backgroundImage: {
        'brading-hero': "url('https://media.istockphoto.com/id/1265423651/photo/woman-with-african-dreadlocks.jpg?s=2048x2048&w=is&k=20&c=uXexPun45yB6F7dgC-_PJhGy_mEnLRrnK7J9w-BrGtE=')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
