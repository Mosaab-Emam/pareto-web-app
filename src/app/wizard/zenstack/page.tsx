"use client";

import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { useState } from "react";
// import { auth_options, type Option as AuthSolution } from "~/data/auth";
import { api } from "~/trpc/react";
import { createProjectAction } from "./actions";

const stack_options = [
  {
    id: "next.js",
    name: "Next.js",
  },
  {
    id: "nuxt",
    name: "Nuxt",
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
  },
  {
    id: "remix",
    name: "Remix.run",
  },
  {
    id: "express",
    name: "Express (Backend only)",
  },
] as const satisfies Array<{ id: string; name: string }>;

export default function ZenStackWizard() {
  const [projectName, setProjectName] = useState("");
  const [selectedStack, setSelectedStack] = useState(new Set(["next"]));
  // const [selectedItem, setSelectedItem] = useState("");
  // const [authSolution, setAuthSolution] = useState<AuthSolution>("next-auth");

  const createProject = api.project.create.useMutation();

  return (
    <main className="mb-12 flex flex-col items-center justify-between px-12 md:px-24">
      <form action={createProjectAction} className="flex flex-col gap-2">
        <Input
          label="Name"
          name="projectName"
          placeholder="Type a name for your new project"
          value={projectName}
          onValueChange={setProjectName}
        />
        <Listbox
          items={stack_options}
          aria-label="Stack Options"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedStack}
          onSelectionChange={(key) => setSelectedStack(key as Set<string>)}
        >
          {(opt) => <ListboxItem key={opt.id}>{opt.name}</ListboxItem>}
        </Listbox>
        {/* <Listbox
          aria-label="List Items"
          onAction={(key) => setSelectedItem(key as string)}
        >
          <ListboxItem key="auth">Auth</ListboxItem>
          <ListboxItem key="copy">Copy link</ListboxItem>
          <ListboxItem key="edit">Edit file</ListboxItem>
          <ListboxItem key="delete" className="text-danger" color="danger">
            Delete file
          </ListboxItem>
        </Listbox> */}
        {/* {selectedItem === "auth" && (
          <Listbox
            items={auth_options}
            aria-label="Actions"
            onAction={(key) => setAuthSolution(key as AuthSolution)}
          >
            {(opt) => <ListboxItem key={opt.id}>{opt.name}</ListboxItem>}
          </Listbox>
        )} */}
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
