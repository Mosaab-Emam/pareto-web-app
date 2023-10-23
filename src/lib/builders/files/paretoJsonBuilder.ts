type OAuthProvider = "google" | "github" | "discord";

export type ParetoJsonSchema = {
  preset: "t3-legacy" | "zenstack";
  framework: "next.js";
  auth: {
    provider: "next-auth" | "clerk";
    oauth_providers: OAuthProvider[];
  };
};

export default function schemaJsonBuilder() {
  const paretoJsonSchema: ParetoJsonSchema = {
    preset: "t3-legacy",
    auth: {
      provider: "next-auth",
      oauth_providers: ["github", "discord"],
    },
  };

  return JSON.stringify(paretoJsonSchema);
}
