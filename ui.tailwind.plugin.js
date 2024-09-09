import plugin from "tailwindcss/plugin";

const ui = ({ addComponents }) => {
  addComponents({
    ".layout-container": {
      "@apply max-w-[360px] bg-background m-auto pl-2.5 pr-2.5 pt-7":{},
    },
    ".card": {
      "@apply rounded-xlg border border-stroke bg-white":{},
    }, 
    ".subText": {
      "@apply font-normal text-center text-sm":{},
    },

  });
};

export default plugin(ui);
