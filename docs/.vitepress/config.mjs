import { defineConfig } from "vitepress";
import gmlGrammar from "./gml.tmLanguage.json" with { type: "json" };
import gmlTheme from "./gml.theme.json" with { type: "json" };

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "TLDR Engine Docs",
    markdown: {
        languages: [gmlGrammar],
        theme: {
            light : gmlTheme,
            dark : gmlTheme
        }
    },
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Getting Started", link: "/basics/getting-started" },
        ],

        sidebar: [
            {
                text: "Basics",
                items: [
                  { text: "Getting Started", link: "/basics/getting-started" },
                  { text: "FAQ", link: "/basics/faq" }
                ],
            },
            {
              text: "Battle System",
              items: [
                {text: "Battle System Intro", link: "/battle-system/battle-system-intro"},
                {text: "Encounter Sets", link: "/battle-system/encounter-sets"},
                {text: "Turn Objects", link: "/battle-system/turn-objects"}
              ]
            },
            {
              text: "Cutscenes",
              items: [
                {text: "Cutscenes", link: "/cutscenes"}
                // TODO add text box/typer control info
                // TODO add Actors
              ]
            }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/tweenko/tldr-engine" },
            { icon: "discord", link: "https://discord.gg/x3t8JTyC2p" },
        ],
    },
});
