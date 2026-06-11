import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/layout/page-loader";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { CurrentProject } from "@/components/sections/current-project";
import { Education } from "@/components/sections/education";
import { Visa } from "@/components/sections/visa";
import { Testimonials } from "@/components/sections/testimonials";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main id="main">
        <Hero />
        <Trust />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CurrentProject />
        <Education />
        <Visa />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
