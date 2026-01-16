import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonial";

export default function App() {
return (

    <div className="relative gradient text-white flex flex-col min-h-screen">
      <CustomCursor/>
      <Navbar/>
      <main className="grow">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Testimonial/>
        <Contact/>
      </main>
      
      <Footer/>
    </div>
  )
}