
const SkillList = ({src,skill})=> {
    return(
        <span>
         <img src={src} alt="checkIcon"/>
            <p>{skill}</p>
        </span>
    )
}
export default SkillList;