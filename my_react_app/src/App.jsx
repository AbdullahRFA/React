import { useState } from "react";
import Props from "./features/props_in_rect";
import College  from "./features/props_with_array";
import StudentName from "./features/props_with_click";

function App() {

  let person1={
    name: "Abdullah",
    age: 25,
    email: "abdullah@example.com"
  }

  let person2={
    name: "Nazmus-Sakib",
    age: 30,
    email: "nazmus-sakib@example.com"
  }

  let person3={
    name: "Sakib",
    age: 28,
    email: "sakib@example.com"
  }

  // const college1={
  //   name: "ABC University",
  //   location: "City A",
  //   established: 1990
  // }

  // const college2={
  //   name: "XYZ College",
  //   location: "City B",
  //   established: 1985
  // } 

  const college1=['new govt',"city",'RC']

 const [stname, setName]= useState("Abdullah")

    const changeName =()=>{
      setName("Nazmus-Sakib");
    }
  return (

   

    <div>
      {/* <Props name="Abdullah" age={25} email="abdullah@example.com"/> */}
      {/* <Props name={person.name} age={person.age} email={person.email}/> */}
      <Props {...person1}/>
      <Props {...person2}/>
      <Props {...person3}/>
      <hr></hr>
      <College {...college1}/>
      {/* <College {...college2}/> */}
      <hr></hr>
      <StudentName name={stname}/>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}
export default App;





















// import LoginButton, {
//   ProfileCard,
//   SettingsPanel,
//   userKey,
// } from "./features/userComponent";
// import Header from "./header";

// function App() {
//   return (
//     <div>
//       <Header />
//       <h1>Hello, React!</h1>
//       <h3>This is a React app</h3>
//       <Fruits></Fruits>
//       <Color />

//       <h3>Result of sumOfDigit: {sumOfDigit()}</h3>
//     </div>
//   );
// }

// function Fruits() {
//   return (
//     <div>
//       <ol type="i">
//         <li>Mango</li>
//         <li>Apple</li>
//         <li>Banana</li>
//       </ol>
//     </div>
//   );
// }

// function Color() {
//   return (
//     <div>
//       <ol type="a">
//         <li>Red</li>
//         <li>Blue</li>
//         <li>Yellow</li>
//       </ol>
//       <hr />
//       <LoginButton />
//       <hr />
//       <ProfileCard />
//       <hr />
//       <SettingsPanel />
//       <hr />
//       <div>User Key: {userKey}</div>
//     </div>
//   );
// }

// function sumOfDigit() {
//   return 5 + 10;
// }
// export default App;

// export var duration = "1h 22 minutes";
