import { type ParetoJsonSchema } from "@paretohq/types";
import { stringify } from "yaml";

type StepWithRun = {
  id?: string;
  name?: string;
  run: string;
};

type StepWithUses = {
  id?: string;
  name?: string;
  uses: string;
  with?: object;
};

type Step = StepWithRun | StepWithUses;

type WorkflowFile = {
  name: string;
  on: {
    workflow_dispatch: object;
  };
  jobs: {
    build: {
      "runs-on": "ubuntu-latest";
      steps: Array<Step>;
    };
  };
};

export default function generatorWorflowFileBuilder(schema: ParetoJsonSchema) {
  const installation_steps: Array<Step> = [];
  const organization_steps: Array<Step> = [];

  switch (schema.base_framework) {
    case "next.js":
      installation_steps.push({
        id: "create-t3-app-cli",
        name: "Create T3 app using create-t3-app cli",
        run: "npx --yes create-t3-app@latest --noGit --CI --nextAuth --prisma --tailwind --trpc",
      });
      organization_steps.push({
        name: "Re-organize",
        run: "rm -rf bin\nshopt -s dotglob\nmv my-t3-app/*.\nrm -rf my-t3-app",
      });
      break;

    default:
      break;
  }

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
          ...installation_steps,
          ...organization_steps,
          {
            uses: "EndBug/add-and-commit@v9",
            with: {
              fetch: false,
              push: false,
            },
          },
          {
            name: "Run pareto generator",
            run: "npx @paretohq/generator",
          },
          {
            uses: "EndBug/add-and-commit@v9",
            with: {
              fetch: false,
              push: true,
            },
          },
        ],
      },
    },
  };

  return stringify(workflow);
}
