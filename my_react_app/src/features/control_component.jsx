import { useState } from "react";

function App() {
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    return(
        <div>
            <h1>Get Input Field Value in React</h1>
            <form method="get">
                <input type="text" placeholder="Enter your name" style={{margin:"10px"}} value={name} onChange={(e)=>setName(e.target.value)}></input>
                <br></br>
                <input type="Password" placeholder="Enter your Password" style={{margin:"10px"}} value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <br></br>
                <input type="Email" placeholder="Enter your Email" style={{margin:"10px"}} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    
            </form>
            <p>Name: {name}</p>
            <p>Password: {password}</p>
            <p>Email: {email}</p>

            <button onClick={()=>{setName(""); setPassword(""); setEmail("")}}>Clear</button>
        </div>
    )
}
export default App;