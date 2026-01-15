import Header from "./header";
import LoginButton,{ProfileCard,SettingsPanel, userKey} from "./userComponent";

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
      <hr />
    <LoginButton />
    <hr />
    <ProfileCard />
    <hr />
    <SettingsPanel />
    <hr />
    <div>User Key: {userKey}</div>
    </div>
  );
}


function sumOfDigit(){
  return 5 + 10;
}
export default App;
