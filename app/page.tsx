import PreLoader from "./animations/PreLoader/PreLoader";
import Hero from "./hero-section/Hero";

export default function Home() {
  return (
    <>
      <PreLoader />
      <main className="flex flex-col items-center justify-center">
        <Hero />
      </main>
    </>
  );
}
