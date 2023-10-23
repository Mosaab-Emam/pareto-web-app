"use server";

import { BaseFramework } from "@paretohq/types";
import Kitter from "~/lib/utils/kitter";

export async function createProjectAction(formData: FormData) {
  // const base_framework: BaseFramework = formData.get('')
  console.log("choice:", formData.get("zenstack_framework"));
  const kitter = new Kitter(formData.get("projectName") as string, {
    base_framework: "next.js",
    auth: {
      solution: "next-auth",
      oauth_providers: [],
    },
    db: {
      orm: "prisma",
      zenstack: {
        framework: "next.js",
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
