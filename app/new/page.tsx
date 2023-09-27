import { Choices } from "@/components/ui/choices";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import data from "@/data";

export default function New() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-24 text-7xl">Initialize Your Project</div>

      <div className="mb-12 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Your project&apos;s name</Label>
        <Input id="name" placeholder="killer-todo-app" />
      </div>

      {data.map((item) => (
        <Choices key={item.title} title={item.title} choices={item.choices} />
      ))}
    </main>
  );
}
