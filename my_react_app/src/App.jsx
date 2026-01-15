import Header from "./header";

function App() {
  return (
    <div>
      <Header />
      <h1>Hello, React!</h1>
      <h3>This is a React app</h3>
      <Fruits></Fruits>
      <Color />

      <h3>Result of sumOfDigit: {sumOfDigit()}</h3>
    </div>
  );
}

function Fruits() {
  return (
    <div>
      <ol type="i">
        <li>Mango</li>
        <li>Apple</li>
        <li>Banana</li>
      </ol>
    </div>
  );
}

function Color() {
  return (
    <div>
      <ol type="a">
        <li>Red</li>
        <li>Blue</li>
        <li>Yellow</li>
      </ol>
    </div>
  );
}


function sumOfDigit(){
  return 5 + 10;
}
export default App;
