import { readFileSync } from "fs";
import { parse, stringify } from "yaml";

type StepWithRun = {
  id?: string;
  name?: string;
  run: string;
};

type StepWithUses = {
  id?: string;
  name?: string;
  uses: string;
  with?: Object;
};

type Step = StepWithRun | StepWithUses;

type WorkflowFile = {
  name: string;
  on: {
    workflow_dispatch: Object;
  };
  jobs: {
    build: {
      "runs-on": "ubuntu-latest";
      steps: Array<Step>;
    };
  };
};

export default function generatorWorflowFileBuilder() {
  const workflow: WorkflowFile = {
    name: "Pareto Project Generator",
    on: {
      workflow_dispatch: {},
    },
    jobs: {
      build: {
        "runs-on": "ubuntu-latest",
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout@v4",
          },
          {
            id: "create-t3-app-cli",
            name: "Create T3 app using create-t3-app cli",
            run: "npx --yes create-t3-app@latest --noGit --CI --nextAuth --prisma --tailwind --trpc",
          },
          {
            name: "Re-organize",
            run: "rm -rf bin\nshopt -s dotglob\nmv my-t3-app/*.\nrm -rf my-t3-app",
          },
          {
            uses: "EndBug/add-and-commit@v9",
            with: {
              fetch: false,
              push: false,
            },
          },
        ],
      },
    },
  };

  return stringify(workflow);
}
