export const oauth_providers_zod_enum = [
  "google",
  "github",
  "discord",
] as const;
export type OAuthProvider = (typeof oauth_providers_zod_enum)[number];

type AuthOption = {
  id: string;
  name: string;
  url: string;
  oauth_providers_selectability: "pareto" | "platform" | "unavailable";
  oauth_providers?: OAuthProvider[];
  status: "available" | "soon" | "schedule";
};

export type Option = (typeof auth_options)[number]["id"];

export const auth_options: Array<AuthOption> = [
  {
    id: "next-auth",
    name: "NextAuth.js",
    url: "https://next-auth.js.org/",
    oauth_providers_selectability: "pareto",
    oauth_providers: ["google", "github", "discord"],
    status: "available",
  },
  {
    id: "clerk",
    name: "Clerk",
    url: "https://clerk.com/",
    oauth_providers_selectability: "platform",
    status: "soon",
  },
  {
    id: "lucia",
    name: "Lucia",
    url: "https://lucia-auth.com/",
    oauth_providers_selectability: "unavailable",
    status: "soon",
  },
  {
    id: "kinde",
    name: "Kinde",
    url: "https://kinde.com/",
    oauth_providers_selectability: "unavailable",
    status: "soon",
  },
  {
    id: "auth0",
    name: "Auth0",
    url: "https://auth0.com/",
    oauth_providers_selectability: "unavailable",
    status: "soon",
  },
  {
    id: "firebase.auth",
    name: "Firebase (auth)",
    url: "https://firebase.google.com/docs/auth",
    oauth_providers_selectability: "unavailable",
    status: "soon",
  },
  {
    id: "supabase.auth",
    name: "Supabase (auth)",
    url: "https://supabase.com/auth",
    oauth_providers_selectability: "unavailable",
    status: "soon",
  },
  {
    id: "appwrite.auth",
    name: "appwrite (auth)",
    url: "https://appwrite.io/docs/products/auth",
    oauth_providers_selectability: "unavailable",
    status: "soon",
  },
];

export const auth_options_zod_enum: [string, ...string[]] = [
  auth_options[0].id,
  ...auth_options.slice(1).map((opt) => opt.id),
];
