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
      {
        name: "More",
        status: "scheduled",
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
      {
        name: "More",
        status: "scheduled",
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
      {
        name: "More",
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
      {
        name: "More",
        status: "scheduled",
      },
    ],
  },
  {
    title: "Features",
    list: [
      {
        name: "I18n",
        status: "supported",
      },
      {
        name: "REST api",
        status: "supported",
      },
      {
        name: "GraphQL api",
        status: "supported",
      },
      {
        name: "OpenAI Schema",
        status: "supported",
      },
      {
        name: "JSON:API standard",
        status: "supported",
      },
      {
        name: "Admin panel",
        status: "supported",
      },
      {
        name: "More",
        status: "scheduled",
      },
    ],
  },
  {
    title: "Hosting",
    list: [
      {
        name: "Vercel",
        status: "supported",
      },
      {
        name: "Netlify",
        status: "supported",
      },
      {
        name: "Shared Hosting",
        status: "wip",
      },
      {
        name: "VPS Hosting",
        status: "wip",
      },
      {
        name: "More",
        status: "scheduled",
      },
    ],
  },
  {
    title: "SaaS integrations",
    list: [
      {
        name: "Authentication",
        status: "supported",
      },
      {
        name: "Logging",
        status: "scheduled",
      },
      {
        name: "CI/CD",
        status: "supported",
      },
      {
        name: "Emails",
        status: "wip",
      },
      {
        name: "Notifications",
        status: "supported",
      },
      {
        name: "Payment processing",
        status: "supported",
      },
      {
        name: "Crypto payment gateways",
        status: "scheduled",
      },
      {
        name: "More",
        status: "scheduled",
      },
    ],
  },
];

export default supportList;
