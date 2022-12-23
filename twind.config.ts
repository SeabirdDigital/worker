import { Options } from "$fresh/plugins/twind.ts";
export default {
    selfURL: new URL("./twind.config.ts", import.meta.url).href,
    theme: {
        extend: {
            colors: {
                "si-red": "#EB5757",
                "si-brown": "#5B4543", // si-red + black/75
                "si-green": "#219653",
            },
            container: {
                center: true,
                padding: "2rem",
            },
            fontFamily: {
                lora: ["Lora", "serif"],
                nunito: ["Nunito Sans", "sans-serif"],
            },
        },
    },
} as Options;
