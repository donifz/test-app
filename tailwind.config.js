const config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F9F9F9",
                stroke: "#F3F3F3",
                orange: "#FF7355",
                orangeSecond: "#FFE3DD",
                gray: "#87898F",
                green: "#52A754",
                purple: "#6B2ABC",
            },
            borderRadius: {
				xlg: "20px",
			},
            boxShadow:{
                btnShadow: "linear-gradient(0deg, #F9F9F9, #F9F9F9),linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03))",
            },
            screens: {
                vsm: "360px",
                // => @media (min-width: 360px) { ... }

                sm: "640px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1240px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1488px",
                // => @media (min-width: 1536px) { ... }
            },
        },

    },
    plugins: [require("./ui.tailwind.plugin")],
  };
export default config;
