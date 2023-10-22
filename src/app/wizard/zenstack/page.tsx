"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { api } from "~/trpc/react";

export default function zenStackWizard() {
  const [projectName, setProjectName] = useState("");

  const createProject = api.project.create.useMutation({
    onSuccess: () => {
      setProjectName("");
    },
  });

  return (
    <main className="mb-12 flex flex-col items-center justify-between px-12 md:px-24">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createProject.mutate({ name: projectName });
        }}
        className="flex flex-col gap-2"
      >
        <Input
          label="Name"
          placeholder="Type a name for your new project"
          value={projectName}
          onValueChange={setProjectName}
        />
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
