import { randomUUID } from "crypto";
import { Button } from "@/components/ui/button";
import { Choices } from "@/components/ui/choices";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import data from "@/data";
import Kitter from "@/lib/utils/kitter";

export default function Page() {
  async function createAndPrepareRepo(formData: FormData) {
    "use server";

    const kitter = new Kitter();
    await kitter.createParetoRepo();
    kitter.putParetoSchemaFile();
    kitter.putParetoSecretToken();
    kitter.putGeneratorActionFile();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-24 text-7xl">Initialize Your Project</div>

      <form
        action={createAndPrepareRepo}
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
