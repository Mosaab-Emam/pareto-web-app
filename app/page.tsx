import { Progress } from "@/components/ui/progress";
import Steps from "@/components/ui/steps";
import SupportBox from "@/components/ui/support-box";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div className="mb-12 text-7xl">
        Initialize Your Project
        <Progress
          value={80}
          text="80% done"
          className="mt-4 block h-8"
          indicatorClassName="bg-green-500 text-white"
        />
      </div>

      <Steps />
      <SupportBox />
    </main>
  );
}
