import { Button } from "@/components/ui/button";
import { Choices } from "@/components/ui/choices";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import data from "@/data";
import { auth } from "@clerk/nextjs";
import { Octokit } from "octokit";

export default function New() {
  async function createNewRepo(formData: FormData) {
    "use server";

    const clerkUser = auth();
    const response = await fetch(
      `https://api.clerk.com/v1/users/${clerkUser.userId}/oauth_access_tokens/github`,
      {
        headers: {
          authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      },
    );
    const [githubAccessToken] = (await response.json()) as { token: string }[];
    console.log("hello server compoenent", githubAccessToken);

    const octokit = new Octokit({ auth: githubAccessToken.token });
    const new_repo_name =
      (formData.get("name") as string) ?? "default-repo-name";

    // Get authenticated user data
    const {
      data: { login: owner },
    } = await octokit.rest.users.getAuthenticated();

    // Create a brand new repo
    await octokit.rest.repos.createForAuthenticatedUser({
      name: new_repo_name,
    });
    console.log(`Repository: ${new_repo_name} created successfully`);

    // Put pareto-schema.json into the newly created repo
    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo: new_repo_name,
      path: "pareto-schema.json",
      message: "Create pareto-schema.json",
      content: "eyJwcmVzZXQiOiAidDMifQ==",
    });

    console.log(`File: pareto-schema.json created successfully`);
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

      {data.map((item) => (
        <Choices key={item.title} title={item.title} choices={item.choices} />
      ))}
    </main>
  );
}
