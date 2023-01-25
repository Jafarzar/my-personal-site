import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { JafarzarDocument, JafarzarQuery } from "../graphql/generated";
import { request } from "../lib/request";

type Props = { result: JafarzarQuery };

const Home: NextPage<Props> = ({ result }) => {
  return (
    <div className="bg-[#f5dfc3] relative h-screen z-0 overflow-auto overflow-x-hidden scroll-smooth font-share">
      <Head>
        <title>Jafarzar</title>
        <meta name="description" content="My Personal Website" />
        <meta property="og:title" content="Jafarzar" />
        <meta property="og:description" content="My Personal Website" />
      </Head>

      {/* Header */}
      <Header allHeaders={result.allHeaders} />

      {/* Hero */}
      <section id="hero">
        <Hero hero={result.hero} />
      </section>

      {/* About */}
      <section id="about">
        <About about={result.about} />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills allSkills={result.allSkillIcons} />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects allProjects={result.allProjectLists} />
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  // retrieving the list of all articles
  const result = await request(JafarzarDocument);
  return {
    props: { result },
  };
};

export default Home;
