import { useState, useEffect } from "react";

function DigitalClock() {
   const [time, setTime]=useState("0");
    const [color, setColor]=useState("red");

   useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)
   },[])

    return(
        <div>
            <h1>Digital Clock</h1>

            <h1 style={{color,padding:"40px",margin:"10px",background:"black",height:"50px",width:"100px",borderRadius:"15px"}}>{time}</h1>
            <ChooseColor color={color} setColor={setColor}/>
        </div>
    )
}
export function ChooseColor({color, setColor}){ 

    const handleChange=(e)=>{
        setColor(e.target.value);
    }
    return(
        <div>
            <select value={color} onChange={handleChange}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    )
}
export default DigitalClock;