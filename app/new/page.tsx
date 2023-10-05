"use client";

import crypto from "crypto";
import { Button } from "@/components/ui/button";
import { Choices } from "@/components/ui/choices";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import data from "@/data";
import Kitter from "@/lib/utils/kitter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function Page() {
  // async function createAndPrepareRepo(formData: FormData) {
  //   "use server";

  //   const kitter = new Kitter();
  //   await kitter.createParetoRepo();
  //   kitter.putParetoSchemaFile();
  //   kitter.putGeneratorActionFile();
  //   kitter.putParetoSecretToken();
  // }

  const randomUUID =
    typeof window !== "undefined"
      ? window.crypto.randomUUID
      : crypto.randomUUID;

  const formSchema = z.object({
    new_repo_name: z.string(),
    preset: z.string(),
    auth: z.object({
      provider: z.enum(["next-auth", "clerk"]),
      oauth_providers: z.array(z.enum(["google", "gitub", "discord"])),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      new_repo_name: randomUUID(),
      preset: "t3-legacy",
      auth: {
        provider: "next-auth",
        oauth_providers: [],
      },
    },
  });

  // 2. Define a submit handler.
  function onSubmit(
    values: z.infer<typeof formSchema>,
    e?: React.BaseSyntheticEvent,
  ) {
    e?.preventDefault();
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-24 text-7xl">Initialize Your Project</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="new_repo_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Set a name for your new project
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create</Button>
        </form>
      </Form>
      {/* <form
        action={createAndPrepareRepo}
        className="mb-12 grid w-full max-w-sm items-center gap-1.5"
      >
        <Label htmlFor="name">Your project&apos;s name</Label>
        <Input id="name" name="name" placeholder="killer-todo-app" />
        <Button type="submit">Create</Button>
      </form> */}

      {/* {data.map((item) => (
        <Choices key={item.title} title={item.title} choices={item.choices} />
      ))} */}
    </main>
  );
}
