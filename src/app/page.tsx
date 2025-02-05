import Hero from "@/components/sections/Hero";
import dynamic from 'next/dynamic'
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const Features = dynamic(() => import('@/components/sections/Features'), {
  ssr: true,
  loading: () => <div className="h-screen" /> // Placeholder while loading
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Contact />
    </main>
  );
}
