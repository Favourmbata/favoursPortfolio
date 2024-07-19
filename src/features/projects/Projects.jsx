import styles from "./Projects.module.css"
import ChurchLogo from  "../../assert/church-logo.png"
import ProjectCard from "../../reuseable/projectCard/ProjectCard";
import Kidjig from  "../../assert/Rectangle 2@2x.png"

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
                    h3=""
                    />
            </div>
        </section>
    )
}
export default Projects;