import DefaultProps from "./default_propes";
import Wrapper from "./wrapper";

function Propes() {
  return (
    <div>
      <h1>Props in React</h1>
      {/* <DefaultProps name="Abdullah" /> */}
      {/* <DefaultProps name="sakib"/> */}
      <Wrapper color="red">

        <h1>Hi, Abdullah</h1>
        <p>please login</p>
        

      </Wrapper>

      <Wrapper color="green">
        <h1>Hi, Nazmus-sakib</h1>
        <p style={{color:"green"}}>Please Logout</p>
      </Wrapper>
    </div>
  );
}

export default Propes;
