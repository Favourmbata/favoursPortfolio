import styles from "./Projects.module.css"
import ChurchLogo from  "../../assert/church-logo.png"
import ProjectCard from "../../reuseable/projectCard/ProjectCard";
import Kidjig from  "../../assert/Rectangle 2@2x.png"
import hobank from "../../assert/hoobank.svg"
import  Gpt3 from "../../assert/logo.svg"
import  Gericht from "../../assert/gericht.png"
const Projects = ()=>{
    return(
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div>
                <ProjectCard
                    src={ChurchLogo}
                    link="https://full-gospel-church.onrender.com/"
                    h3="Church Website"
                />
            </div>
            <div>
                <ProjectCard
                    src={Kidjig}
                    link="https://kisjig.vercel.app/"
                    h3="Kidjid landing page"
                />
            </div>
            <div>
                <ProjectCard
                    src={hobank}
                    link="https://modern-baking-webpage.vercel.app/"
                    h3="modern banking webpage"
                />
            </div>
            <div>
                <ProjectCard
                    src={Gericht}
                    link="https://restaurant-app-five-chi.vercel.app/"
                    h3="Active resturant website"
                />
            </div>
            <div>
                <ProjectCard
                    src={Gpt3}
                    link="https://gpt-3-rouge-three.vercel.app/"
                    h3="Gpt3 version landing page"
                />
            </div>
        </section>
    )
}
export default Projects;