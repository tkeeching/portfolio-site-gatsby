import React from "react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Footer from "../components/Footer/Footer"
import About from "./About/About"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"


const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage