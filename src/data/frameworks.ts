import ActixIcon from "../assets/logos/actix.png";
import DjangoIcon from "../assets/logos/django.svg";
import ExpressIcon from "../assets/logos/express.svg";
import FastifyIcon from "../assets/logos/fastify.svg";
import LaravelIcon from "../assets/logos/laravel.svg";
import NestJsIcon from "../assets/logos/nest.svg";
import NextJsIcon from "../assets/logos/nextjs-icon.svg";
import NuxtJsIcon from "../assets/logos/nuxt-icon.svg";
import RemixIcon from "../assets/logos/remix.svg";
import SvelteKitIcon from "../assets/logos/svelte-kit.svg";

type FrameworkId =
  | "nextjs"
  | "nuxt"
  | "remix"
  | "sveltekit"
  | "laravel"
  | "django"
  | "express"
  | "fastify"
  | "nestjs"
  | "actix";
type Framework = {
  id: FrameworkId;
  name: string;
  icon: any;
};

export const frameworks: Array<Framework> = [
  {
    id: "nextjs",
    name: "Nextjs",
    icon: NextJsIcon,
  },
  {
    id: "nuxt",
    name: "Nuxt",
    icon: NuxtJsIcon,
  },
  {
    id: "remix",
    name: "Remix",
    icon: RemixIcon,
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
    icon: SvelteKitIcon,
  },
  {
    id: "laravel",
    name: "Laravel",
    icon: LaravelIcon,
  },
  {
    id: "django",
    name: "Django",
    icon: DjangoIcon,
  },
  {
    id: "actix",
    name: "Actix",
    icon: ActixIcon,
  },
  {
    id: "express",
    name: "Express",
    icon: ExpressIcon,
  },
  {
    id: "fastify",
    name: "Fastify",
    icon: FastifyIcon,
  },
  {
    id: "nestjs",
    name: "NestJs",
    icon: NestJsIcon,
  },
];
