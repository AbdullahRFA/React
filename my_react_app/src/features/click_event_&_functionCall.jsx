//  const fruitsNames = (names)=>{
//         alert( names)
//     }


function App(){

    function greet(){
        alert("Hello, welcome to my React App!")
    }

    const personName =()=>{
        alert( "Abdullah Nazmus-Sakib")
    }

    const fruitsNames = (names)=>{
        alert( names)
    }

    return(
        <div>
            <button onClick={greet}>Click Me</button>
            <br /><br />
            <button onClick={personName}>Click me to see person name </button>
            <br /><br />
            <button onClick={()=>fruitsNames("Apple")}>Click me to see fruit name</button>
        </div>
    )
}

export default App;