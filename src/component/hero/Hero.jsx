import styles from "./Hero.module.css"
import heroImg from "./../../assert/favour1.png"
import sun from '../../assert/sun.svg';
import moon from '../../assert/moon.svg';
import twitterLight from '../../assert/twitter-light.svg';
import twitterDark from '../../assert/twitter-dark.svg';
import githubLight from '../../assert/github-light.svg';
import githubDark from '../../assert/github-dark.svg';
import linkedinLight from '../../assert/linkedin-light.svg';
import linkedinDark from '../../assert/linkedin-dark.svg';
import CV from "./../../assert/Favour-Mbata_CV.pdf";
import {useTheme} from "../../reuseable/themeContext/ThemeContext";

const Hero = ()=>{
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    return(
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    src={heroImg}
                    className={styles.hero}
                    alt="Favours profile "
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>


            <div className={styles.info}>
                <h2 style={{fontWeight:"40px",fontSize:40}}>
                    Favour
                    Mbata
                </h2>
                <h2 style={{fontWeight:"35px",fontSize:30}}>Frontend Developer</h2>
                <span>
           <a href="https://x.com/legitimate444" target="blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/Favourmbata" target="blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/favourmbata12626a278/" target="blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
                <p className={styles.description}>
                    With a passion for developing modern React web apps for commercial
                    businesses.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    )

}
export default Hero;