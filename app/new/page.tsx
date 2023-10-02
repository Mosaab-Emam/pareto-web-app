import { Button } from "@/components/ui/button";
import { Choices } from "@/components/ui/choices";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import data from "@/data";
import sodiumize from "@/lib/utils/sodiumize";
import { auth } from "@clerk/nextjs";
import { Octokit } from "octokit";
import { randomUUID } from "crypto";

export default function Page() {
  async function createNewRepo(formData: FormData) {
    "use server";

    const octokit = new Octokit({ auth: process.env.PARETO_PAT });
    const new_repo_name = randomUUID();

    // Create a private repo on pareto for the project
    const repo = await octokit.request("POST /orgs/{org}/repos", {
      org: "paretohq",
      name: new_repo_name,
      description: "This is your first repository",
      homepage: "https://github.com",
      private: true,
      has_issues: false,
      has_projects: false,
      has_wiki: false,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.log(`Repository: ${new_repo_name} created successfully`);

    // Put pareto-schema.json into the newly created repo
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: "paretohq",
      repo: new_repo_name,
      path: "pareto-schema.json",
      message: "Create pareto-schema.json",
      content: "eyJwcmVzZXQiOiAidDMifQ==",
    });

    console.log(`File: pareto-schema.json created successfully`);

    // Create a repo secret
    const pub_key = await octokit.request(
      "GET /repos/{owner}/{repo}/actions/secrets/public-key",
      {
        owner: "paretohq",
        repo: new_repo_name,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );

    const encrypted_value = await sodiumize(
      pub_key.data.key,
      process.env.PARETO_PAT!,
    );

    await octokit.request(
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
      {
        owner: "paretohq",
        repo: new_repo_name,
        secret_name: "PARETO_PAT",
        encrypted_value,
        key_id: pub_key.data.key_id,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );

    console.log("Add Secret");
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-24 text-7xl">Initialize Your Project</div>

      <form
        action={createNewRepo}
        className="mb-12 grid w-full max-w-sm items-center gap-1.5"
      >
        <Label htmlFor="name">Your project&apos;s name</Label>
        <Input id="name" name="name" placeholder="killer-todo-app" />
        <Button type="submit">Create</Button>
      </form>

      {/* {data.map((item) => (
        <Choices key={item.title} title={item.title} choices={item.choices} />
      ))} */}
    </main>
  );
}
