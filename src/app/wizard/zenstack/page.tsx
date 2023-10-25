"use client";

import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
// import { auth_options, type Option as AuthSolution } from "~/data/auth";
import type { ZenstackSupportedFramework } from "@paretohq/types";
import { api } from "~/trpc/react";
import { createProjectAction } from "./actions";

const stack_options: Array<{
  id: ZenstackSupportedFramework;
  name: string;
  selectable: boolean;
}> = [
  {
    id: "next.js",
    name: "Next.js",
    selectable: true,
  },
  {
    id: "nuxt",
    name: "Nuxt",
    selectable: false,
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
    selectable: false,
  },
  {
    id: "remix",
    name: "Remix.run",
    selectable: false,
  },
  {
    id: "express",
    name: "Express (Backend only)",
    selectable: false,
  },
];

export default function ZenStackWizard() {
  const createProject = api.project.create.useMutation();

  return (
    <main className="mb-12 flex flex-col items-center justify-between px-12 md:px-24">
      <form action={createProjectAction} className="flex flex-col gap-2">
        <Input
          label="Name"
          name="projectName"
          placeholder="Type a name for your new project"
          isRequired
        />

        <Select
          name="base_framework"
          label="Choose a framework"
          className="max-w-xs"
          isRequired
          disabledKeys={stack_options.reduce(
            (keys, opt) => (opt.selectable ? keys : [...keys, opt.id]),
            [] as Array<string>,
          )}
        >
          {stack_options.map((opt) => (
            <SelectItem key={opt.id} value={opt.id}>
              {opt.name}
            </SelectItem>
          ))}
        </Select>

        <Button
          color="primary"
          type="submit"
          isDisabled={createProject.isLoading}
        >
          Create Project
        </Button>
      </form>
    </main>
  );
}
