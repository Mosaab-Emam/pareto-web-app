type ListItem = {
  name: string;
  status: "supported" | "wip" | "scheduled"; // wip = work in progress
};

type SubList = {
  title: string;
  list: ListItem[];
};

const supportList: SubList[] = [
  {
    title: "Presets",
    list: [
      {
        name: "T3 Stack",
        status: "supported",
      },
      {
        name: "Laravel + Filament",
        status: "supported",
      },
      {
        name: "RedwoodJS",
        status: "wip",
      },
      {
        name: "MERN STACK",
        status: "wip",
      },
    ],
  },
  {
    title: "Frameworks",
    list: [
      {
        name: "Next.js",
        status: "supported",
      },
      {
        name: "Remix",
        status: "supported",
      },
      {
        name: "Nuxt",
        status: "supported",
      },
      {
        name: "SvelteKit",
        status: "supported",
      },
      {
        name: "Laravel",
        status: "supported",
      },
      {
        name: "Django",
        status: "scheduled",
      },
      {
        name: "Rocket",
        status: "scheduled",
      },
      {
        name: "Actix",
        status: "scheduled",
      },
      {
        name: "Express",
        status: "supported",
      },
      {
        name: "Fastify",
        status: "wip",
      },
      {
        name: "NestJs",
        status: "wip",
      },
    ],
  },
  {
    title: "BaaS",
    list: [
      {
        name: "Firebase",
        status: "wip",
      },
      {
        name: "Supabase",
        status: "supported",
      },
      {
        name: "AWS amplify",
        status: "scheduled",
      },
      {
        name: "nHost",
        status: "scheduled",
      },
      {
        name: "Realm",
        status: "scheduled",
      },
      {
        name: "appwrite",
        status: "scheduled",
      },
    ],
  },
  {
    title: "Databases",
    list: [
      {
        name: "Postgresql",
        status: "supported",
      },
      {
        name: "MySQL",
        status: "supported",
      },
      {
        name: "MongoDB",
        status: "supported",
      },
      {
        name: "CockroachDB",
        status: "wip",
      },
    ],
  },
];

export default supportList;
