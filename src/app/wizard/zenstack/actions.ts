"use server";

import Kitter from "~/lib/utils/kitter";

export async function createProjectAction(formData: FormData) {
  const kitter = new Kitter(formData.get("projectName") as string);
  await kitter.createParetoRepo();
  await Promise.all([
    kitter.putParetoSchemaFile({
      preset: "zenstack",
      framework: "next.js",
      auth: {
        provider: "next-auth",
        oauth_providers: [],
      },
    }),
    kitter.putGeneratorActionFile(),
    kitter.putParetoSecretToken(),
  ]);
}
