import BunIcon from "../assets/logos/bun.svg";
import JavascriptIcon from "../assets/logos/javascript.svg";
import NextJsIcon from "../assets/logos/nextjs-icon.svg";
import {
  default as NpmIcon,
  default as PnpmIcon,
} from "../assets/logos/npm.svg";
import NuxtJsIcon from "../assets/logos/nuxt-icon.svg";
import TypescriptIcon from "../assets/logos/typescript-icon.svg";
import YarnIcon from "../assets/logos/yarn.svg";

export type Section = {
  title: string;
  choices: [
    {
      title: string;
      code: string;
      icon: any;
    },
  ];
};

export default [
  {
    title: "Framework",
    choices: [
      {
        title: "Nextjs",
        code: "nextjs",
        icon: NextJsIcon,
      },
      {
        title: "Nuxt",
        code: "nuxt",
        icon: NuxtJsIcon,
      },
    ],
  },
  {
    title: "Flavor",
    choices: [
      {
        title: "Typescript",
        code: "typescript",
        icon: TypescriptIcon,
      },
      {
        title: "Javascript",
        code: "javascript",
        icon: JavascriptIcon,
      },
    ],
  },
  {
    title: "Package Manager",
    choices: [
      {
        title: "NPM",
        code: "npm",
        icon: NpmIcon,
      },
      {
        title: "Yarn",
        code: "yarn",
        icon: YarnIcon,
      },
      {
        title: "Pnpm",
        code: "pnpm",
        icon: PnpmIcon,
      },
      {
        title: "Bun",
        code: "bun",
        icon: BunIcon,
      },
    ],
  },
] as unknown as Array<Section>;
