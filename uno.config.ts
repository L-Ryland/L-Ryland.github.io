import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetIcons,
  presetWind3,
  presetWind4,
  presetWebFonts,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  transformers: [transformerVariantGroup()],
  presets: [
    presetWind3({
      dark: "class",
    }),
    presetWind4({
      dark: "class",
      attributifyPseudo: false,
    }),
    presetAttributify(),
    presetWebFonts({
      themeKey: "font",
      provider: {
        name: "none",
        getPreflight: (fonts) => {
          let result = [];
          for (const { name } of fonts) {
            result.push(`@font-face {
              font-family: ${name};
              src: local(${name}) format("woff2");
            }`);
          }
          return result.join("\n");
        },
      },
      fonts: {
        serif: ["Tangerine"],
        sans: ["Geist"],
        mono: ["Geist Mono"],
      },
    }),
    presetTypography(),
    presetIcons({
      collections: {
        ri: () =>
          import("@iconify/json/json/ri.json").then((i) => {
            // console.log("i", i.default);
            return i.default;
          }),
        mages: () =>
          import("@iconify/json/json/mage.json").then((i) => {
            console.log("i", i);
            type test = typeof i.default;
            return i.default;
          }),
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  theme: {
    animation: {
      keyframes: {
        shine: `{
          0% { background-position: 100%; }
          100% { background-position: -100%; }
        }`,
        custom:
          "{0%, 100% { transform: scale(0.5); } 50% { transform: scale(1); }}",
      },
      durations: {
        shine: "5s",
      },
      timingFns: {
        shine: "linear",
      },
      counts: {
        shine: "infinite",
      },
      category: {
        shine: "shine",
        custom: "Zooming",
      },
    },
  },
  rules: [
    ["w-screen", { width: "100dvw" }],
    ["h-screen", { height: "100dvh" }],
    ["min-h-screen", { "min-height": "100dvh" }],
  ],
});
