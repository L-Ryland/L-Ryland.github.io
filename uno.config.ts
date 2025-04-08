import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetIcons,
  presetWind3,
  presetWind4,
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
  theme: {},
  rules: [
    ["w-screen", { width: "100dvw" }],
    ["h-screen", { height: "100dvh" }],
    ["min-h-screen", { "min-height": "100dvh" }],
  ],
});
