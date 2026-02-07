import { useState } from "react";

function App() {
    const [info,setInfo]=useState("");
    return(
        <div>
            <h1>Get Input Field Value in React</h1>
            <input type="text" value={info} placeholder="Enter your name" onChange={(event)=>{setInfo(event.target.value)}}></input>
            <p>Value: {info}</p>
            <button onClick={()=>setInfo("")}>Clear</button>
        </div>
    )
}
export default App;