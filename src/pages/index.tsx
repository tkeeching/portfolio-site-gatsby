import React from "react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import About from "./About/About"
import Projects from "./Projects/Projects"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

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
