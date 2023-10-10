import FeatureTabs from "@/components/feature-tabs";
import Hero from "@/components/ui/Hero";
import Steps from "@/components/ui/steps";
import SupportBox from "@/components/ui/support-box";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <main className="flex flex-col items-center justify-between p-12 md:p-24"> */}
      <main className="mb-12 flex flex-col items-center justify-between px-12 md:px-24">
        <FeatureTabs />
      </main>
    </>
  );
}
