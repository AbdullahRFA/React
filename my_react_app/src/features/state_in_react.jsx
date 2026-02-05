import { useState } from "react";
import Counter from "./counter_for_state";

function App() {
    const [name, setName]=useState("Abdullah Nazmus-Sakib");

    const changeName=()=>{
        setName("Rafiya Akter");
    }
    return(
            <div>
                <h1>Name: {name}</h1>
                <button onClick={changeName}>His Wife name</button>
                <hr />
                <Counter />
            </div>
    )
}
export default App;