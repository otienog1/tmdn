/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {

            },
            backgroundColor: (theme) => ({
                tmdprimary: "#ec7211",

            }),
            borderColor: () => ({
                tmdprimary: "#ec7211",
            }),
        },
    },
    plugins: [],
}
