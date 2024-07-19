import styles from "./Skill.module.css"
import CheckIconLight from  "./../../assert/checkmark-light.svg"
import CheckIconDark from  "./../../assert/checkmark-dark.svg"
import SkillList from "../../reuseable/skillList/SkillList";
import {useTheme} from "../../reuseable/themeContext/ThemeContext"

const Skill = ()=> {
    const { theme } = useTheme();
    const  CheckMarkIcon = theme === 'light'? CheckIconLight:CheckIconDark;

    return(
        <section id="SKills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={CheckMarkIcon} skill="HTML"/>
                <SkillList src={CheckMarkIcon} skill="CSS"/>
                <SkillList src={CheckMarkIcon} skill="JavaScript"/>
                <SkillList src={CheckMarkIcon} skill="TypeScript"/>
                <SkillList src={CheckMarkIcon} skill="Node"/>
            </div>
            <hr/>
            <div className={styles.skillList}>
                <SkillList src={CheckMarkIcon} skill="React"/>
                <SkillList src={CheckMarkIcon} skill="Next"/>
                <SkillList src={CheckMarkIcon} skill="Tailwind CSS"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={CheckMarkIcon} skill="Redux"/>
                <SkillList src={CheckMarkIcon} skill="Webpack"/>
                <SkillList src={CheckMarkIcon} skill="Git"/>

            </div>
        </section>
    )
}

export default Skill