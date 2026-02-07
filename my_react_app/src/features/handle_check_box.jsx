import { useState } from "react";

function App(){
    const [skills, setSkills]=useState([""]);
    const handleSkill=(event)=>{
        const skill = event.target.value;
        if(event.target.checked){
            setSkills([...skills, skill]);
        }else{
            setSkills(skills.filter((s)=>s!==skill));
        }
    }
    return(
        <div>
            <h1>Handle Check Box in React</h1>
            <input type="checkbox" id="php" value={"PHP"} onChange={(handleSkill)}></input>
            <label htmlFor="php">PHP</label><br></br><br></br>

            <input type="checkbox" id="js" value={"JavaScript"} onChange={(handleSkill)}></input>
            <label htmlFor="js">JavaScript</label><br></br><br></br>

            <input type="checkbox" id="python" value={"Python"} onChange={(handleSkill)}></input>
            <label htmlFor="python">Python</label><br></br><br></br>

            <input type="checkbox" id="java" value={"Java"} onChange={(handleSkill)}></input>
            <label htmlFor="java">Java</label><br></br><br></br>

            <input type="checkbox" id="csharp" value={"C#"} onChange={(handleSkill)}></input>
            <label htmlFor="csharp">C#</label><br></br><br></br>  

            <h2>Your skill: {skills.toString()}</h2>   
        </div>
    )
}
export default App;