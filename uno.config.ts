import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  presetWind4,
} from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  presets: [
    presetWind3({
      dark: "media",
    }),
    presetWind4({
      dark: "media",
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
