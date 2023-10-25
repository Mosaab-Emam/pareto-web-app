"use server";

import Kitter from "~/lib/utils/kitter";

export async function createProjectAction(formData: FormData) {
  if (!formData.get("base_framework")) throw new Error("Invalid formdata");

  const base_framework = formData.get("base_framework")! as "next.js";

  const kitter = new Kitter(formData.get("projectName") as string, {
    base_framework,
    auth: {
      solution: "next-auth",
      oauth_providers: [],
    },
    db: {
      orm: "prisma",
      zenstack: {
        framework: base_framework,
      },
    },
  });
  await kitter.createParetoRepo();
  await Promise.all([
    kitter.putParetoSchemaFile(),
    kitter.putGeneratorActionFile(),
    kitter.putParetoSecretToken(),
  ]);
}
