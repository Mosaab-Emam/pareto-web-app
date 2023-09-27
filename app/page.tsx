import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SupportBox from "@/components/ui/support-box";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-7xl">
        Initialize your project <br />
        <div className="flex items-center">
          at
          <Progress
            value={80}
            text="80% done"
            className="ml-4 h-8"
            indicatorClassName="bg-green-500 text-white"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Button asChild className="mr-4">
          <Link href="/new">New Project</Link>
        </Button>

        <Button variant="outline">Learn more</Button>
      </div>

      <div className="mb-32 grid text-center lg:mb-8 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Any Language</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            From Javascript to PHP to Python to Rust, and any language that can
            write the web
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Any Framework</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Initialize your project in the framework of your choosing
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Any Infrastructure</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Projects are pre-configured to work out of the box with your
            favourite hosting choice
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Any Integration</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get SaaS ready projects with integrations for emails, payment
            processing, logging, and more.
          </p>
        </div>
      </div>

      <SupportBox />
    </main>
  );
}
