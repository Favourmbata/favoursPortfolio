
import './App.css';
import Footer from './features/footer/Footer';
import Hero from './component/hero/Hero';
import Skill from "./component/skill/Skill";
import Contact from "./features/contact/Contact";
import Projects from "./features/projects/Projects";

function App() {
    return (
        <>
            <Hero />
            <Projects />
            <Skill />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
