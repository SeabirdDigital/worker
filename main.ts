/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { aspectRatio } from "https://raw.githubusercontent.com/tw-in-js/twind-aspect-ratio/main/index.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
    plugins: [
        twindPlugin({
            plugins: {
                aspect: aspectRatio,
            },
            ...twindConfig,
        }),
    ],
});
