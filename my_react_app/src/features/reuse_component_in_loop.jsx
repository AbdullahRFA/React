import ReusableComponent from "./reusable_cmpt"


function App(){
    const userData = [
    { id: 1, name: "John", age: 25, email: "john@example.com" },
    { id: 2, name: "Jane", age: 30, email: "jane@example.com" },
    { id: 3, name: "Bob", age: 35, email: "bob@example.com" },
    { id: 4, name: "Alice", age: 28, email: "alice@example.com" },
  ];

    return(
        <div>
        <h1>Reuse Component in Loop in React</h1>
            
            {userData.map((user)=>(
                <ReusableComponent user={user}/>
            ))}
        </div>
    )
}
export default App;