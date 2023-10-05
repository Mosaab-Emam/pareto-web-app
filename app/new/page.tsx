"use client";

import crypto from "crypto";
import { Badge } from "@/components/ui/badge";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import data from "@/data";
import {
  auth_options,
  auth_options_zod_enum,
  oauth_providers_zod_enum,
  type OAuthProvider,
} from "@/data/auth";
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
    auth_provider: z.enum(auth_options_zod_enum),
    oauth_providers: z.array(z.enum(oauth_providers_zod_enum)),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      new_repo_name: randomUUID(),
      auth_provider: "next-auth",
      oauth_providers: [],
      // auth: {
      //   provider: "next-auth",
      //   oauth_providers: [],
      // },
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
          {/* Project name */}
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

          {/* Auth provider */}
          <FormField
            control={form.control}
            name="auth_provider"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Choose an auth provider:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {auth_options.map((auth_option) => (
                      <FormItem
                        key={auth_option.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={auth_option.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {auth_option.name}{" "}
                          {auth_option.status == "soon" && (
                            <Badge variant="default">coming soon</Badge>
                          )}
                          {auth_option.status == "schedule" && (
                            <Badge variant="destructive">sceduled</Badge>
                          )}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
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
