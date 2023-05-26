import About from "@/components/About";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Head from "next/head";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khanh | Software Developer</title>
        <meta name="description" content="Khanh's Portfolio Website" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
