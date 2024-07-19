

import React from "react";
const ProjectCard = ({src,link,h2})=>{
 return(
     <section>
         <a href={link} target="_blank">
             <img className="hover" src={src} alt={`${h2} logo`}/>
             <h3>{h2}</h3>

         </a>
     </section>
 )
}
export default ProjectCard;