import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Stack } from "@/sections/Stack";
import { Contact } from "@/sections/Contact";

import { Navbar } from "@/layout/Navbar";


function App() {

  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </div>
  )
}

export default App
