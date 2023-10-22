import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      {/* <main className="flex flex-col items-center justify-between p-12 md:p-24"> */}
      {/* <main className="mb-12 flex flex-col items-center justify-between px-12 md:px-24">
        <FeatureTabs />
      </main> */}
    </>
  );
}
